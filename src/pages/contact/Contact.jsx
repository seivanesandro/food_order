import React from 'react';
//import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components';
import singlePiza from '../../assets/fooda.jpeg'
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

const StyledContact = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    gap: 3rem;
    flex-direction: row;

    @media only screen and (${devices.iphone14}) {
        flex-direction: column;
    }
    @media only screen and (${devices.mobileG}) {
        flex-direction: column !important;
    }
    @media only screen and (${devices.mobileM}) {
    }
    @media only screen and (${devices.mobileP}) {
    }
`;
const ContainerContactLeftSide = styled.div`
    width: 72%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${singlePiza});

    animation: ${Show} 1.1s linear;

    @media only screen and (${devices.portatil}) {
        width: 60%;
    }
    @media only screen and (${devices.tablet}) {
        width: 115%;
        height: 108%;
    }
    @media only screen and (${devices.iphone14}) {
        width: 100%;
    }
    @media only screen and (${devices.mobileG}) {
        width: 100%;
    }
    @media only screen and (${devices.mobileM}) {
        width: 100%;
    }
    @media only screen and (${devices.mobileP}) {
        width: 100%;
    }
`;
const ContainerContactRightSide = styled.div`
    width: 19%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6rem;
    margin: 5rem 1rem;
    @media only screen and (${devices.tablet}) {
        width: 90%;
    }
    @media only screen and (${devices.iphone14}) {
        align-items: center;
        margin: 1rem 2rem !important;
    }
    @media only screen and (${devices.mobileG}) {
    }
    @media only screen and (${devices.mobileM}) {
    }
    @media only screen and (${devices.mobileP}) {
    }
`;
const StyledFormContact = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;


`;


const Contact = (props) => {
    return (
        <>
            <StyledContact className="contact">
                <ContainerContactLeftSide className="contact-left-side"></ContainerContactLeftSide>
                <ContainerContactRightSide className="contact-right-side">
                    <h2 className="contact-title">
                        Contact us
                    </h2>
                    <StyledFormContact
                        method="POST"
                        id="contact-form"
                        className="contact-form"
                    >
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            className="forms-input"
                            name='name'
                        />
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="text"
                            className="forms-input"
                            name='email'
                        />
                        <label htmlFor="message">Message</label>
                        <textarea rows={6} cols={1} name="message" id="message" required></textarea>
                    </StyledFormContact>
                </ContainerContactRightSide>
            </StyledContact>
        </>
    );
};

Contact.propTypes = {};

export default Contact;
