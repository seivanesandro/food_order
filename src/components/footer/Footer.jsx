import React from 'react';
//import PropTypes from 'prop-types'
import styled from 'styled-components';
import { devices } from '../../utils/constantes';

const StyleFooter = styled.div`
    max-width: 100%;
    width: 100%;
    height: 10vh;
    object-fit: cover !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
    background-size: cover !important;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 3rem 0 9rem 0;
    background: #333;
    color: #fff;

    @media only screen and (${devices.fourk}) {
        height: 9vh !important;
    }
    @media only screen and (${devices.tablet}) {
        display: none;
    }
    @media only screen and (${devices.iphone14}) {
        display: none;
    }
    @media only screen and (${devices.mobileG}) {
        display: none;
    }
    @media only screen and (${devices.mobileM}) {
        display: none;
    }
    @media only screen and (${devices.mobileP}) {
        display: none;
    }
`;
const ContainerFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
`;

const FooterSocialMedia = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    cursor: pointer;
`;

const Copyright = styled.div`
    text-align: center;
    margin: 0.5rem auto;
`;

const StyleCopyright = styled.span`
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    text-shadow: 0 0 0.1rem black;
    &::selection {
        color: rgb(70, 242, 248);
        background: transparent;
    }
`;

const Footer = ({
    instagram,
    twitter,
    facebook,
    linkedin,
    year
}) => {
    return (
        <>
            <StyleFooter className="footer position-fixed bottom-0">
                <ContainerFooter className="container-footer">
                    <FooterSocialMedia className="footer-social-media">
                        {instagram}
                        {twitter}
                        {facebook}
                        {linkedin}
                    </FooterSocialMedia>
                    <Copyright className="copyright">
                        <StyleCopyright className="copyright-style">
                            sandroseivane - copyrights©{year}
                        </StyleCopyright>
                    </Copyright>
                </ContainerFooter>
            </StyleFooter>
        </>
    );
};

Footer.propTypes = {};

export default Footer;
