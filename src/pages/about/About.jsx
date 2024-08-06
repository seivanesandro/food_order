import React from 'react';
//import PropTypes from 'prop-types'
import styled, {
    keyframes
} from 'styled-components';
import Multipizzas from '../../assets/masala.jpg';
import { devices } from '../../utils/constantes';

const Show = keyframes`
    0%{
        opacity:0;
    }
    50%{
        opacity:0.5;
    }

    100%{
        opacity:1;
    }
`;

const StyleAbout = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    gap: 5rem;
`;
const ContainerAboutHeader = styled.div`
    width: 100%;
    height: 45%;
    background-image: url(${Multipizzas});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    animation: ${Show} 1.1s linear;
`;
const ContainerAboutBottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    animation: ${Show} 1.5s linear;
`;
const ContainerAboutDescription = styled.p`
    width: 80rem;
    text-align: center;

    @media only screen and (${devices.portatilS}) {
        width: 50rem;
    }
    @media only screen and (${devices.portatil}) {
        width: 50rem;
    }
    @media only screen and (${devices.tablet}) {
        width: 40rem;
    }
    @media only screen and (${devices.iphone14}) {
        width: 40rem;
    }
    @media only screen and (${devices.mobileG}) {
        width: 20rem;
    }
    @media only screen and (${devices.mobileM}) {
        width: 19rem;
    }
    @media only screen and (${devices.mobileP}) {
        width: 14rem;
    }
`;

const Contact = props => {
    return (
        <>
            <StyleAbout className="about">
                <ContainerAboutHeader className="about-header-container"></ContainerAboutHeader>
                <ContainerAboutBottom className="about-bottom-container">
                    <h2 className="about-title">
                        About us
                    </h2>
                    <ContainerAboutDescription className="about-description">
                        Lorem ipsum dolor sit amet
                        consectetur adipisicing
                        elit. Soluta sint quod
                        beatae, quis libero
                        quisquam dolorem a
                        molestias exercitationem?
                        Animi unde laboriosam
                        labore accusamus? Officiis
                        illum explicabo odit
                        perspiciatis unde.
                    </ContainerAboutDescription>
                </ContainerAboutBottom>
            </StyleAbout>
        </>
    );
};

Contact.propTypes = {};

export default Contact;
