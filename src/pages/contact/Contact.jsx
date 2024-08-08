import React, { useState } from 'react';
//import PropTypes from 'prop-types'
import styled, {
    keyframes
} from 'styled-components';
import singlePiza from '../../assets/fooda.jpeg';
import { devices } from '../../utils/constantes';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';

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
    gap: 3.8rem;
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
    gap: 4rem;
    margin: 5rem 1rem 0.5rem 1rem;

    @media only screen and (${devices.portatil}) {
        width: 22%;
    }
    @media only screen and (${devices.tablet}) {
        width: 90%;
    }
    @media only screen and (${devices.iphone14}) {
        width: 63%;
        align-items: baseline !important;
        margin: 1rem auto !important;
    }
    @media only screen and (${devices.mobileG}) {
        width: 63%;
        margin: 1rem auto !important;
    }
    @media only screen and (${devices.mobileM}) {
        width: 69%;
        margin: 1rem auto !important;
    }
    @media only screen and (${devices.mobileP}) {
        width: 74%;
        margin: 1rem auto !important;
    }
`;
const StyledFormContact = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.3rem;
    width: 43%;
    @media only screen and (${devices.fourk}) {
        width: 43%;
    }
    @media only screen and (${devices.portatilL}) {
        width: 68%;
    }
    @media only screen and (${devices.portatilS}) {
        width: 76%;
    }
    @media only screen and (${devices.portatil}) {
        width: 68%;
    }
    @media only screen and (${devices.tablet}) {
        width: 64%;
    }
    @media only screen and (${devices.iphone14}) {
        width: 71%;
    }
    @media only screen and (${devices.mobileG}) {
        width: 71%;
    }
    @media only screen and (${devices.mobileM}) {
        width: 74%;
    }
    @media only screen and (${devices.mobileP}) {
        width: 58%;
    }
`;

const StyleError = styled.span`
    font-size: 0.7rem !important;
    color: red !important;
    font-weight: 600;
    text-shadow: 0 0 0.1rem red !important;
    width: 15rem !important;
    text-align: center;
    margin-bottom: 1.5rem !important;
`;

const Contact = props => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const [error, setError] = useState(false);

    const validateName = new RegExp(
        '^[a-zA-Z]+( [a-zA-Z0-9_]+)*$'
    );
    const validatePhone = new RegExp(
        '^[(]?[0-9]{3}[)]?[0-9]{3}?[0-9]{4,6}$'
    );

    const navigate = useNavigate();

    const validate = e => {
        e.preventDefault();

        if (!validateName.test(name)) {
            setError(true);
        } else {
            setError(false);
            navigate('/');
        }

        if (!validatePhone.test(phone)) {
            setError(true);
        } else {
            setError(false);
            navigate('/');
            alert(
                'we will contact you soon as possible'
            );
        }
    };

    const handleClick = () => {
        validate();
    };
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
                        onSubmit={handleClick}
                    >
                        <label htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            className="forms-input"
                            placeholder="name"
                            name="name"
                            value={name}
                            onChange={e =>
                                setName(
                                    e.target.value
                                )
                            }
                        />
                        <label htmlFor="phone">
                            Phone
                        </label>
                        <input
                            type="text"
                            className="forms-input"
                            placeholder="+351xxxxxxxxx"
                            name="phone"
                            value={phone}
                            onChange={e =>
                                setPhone(
                                    e.target.value
                                )
                            }
                        />

                        <label htmlFor="message">
                            Message
                        </label>

                        <textarea
                            rows={6}
                            cols={1}
                            name="message"
                            id="message"
                            placeholder="optional info..."
                            required
                        ></textarea>
                        {error && (
                            <StyleError className="error">
                                Please fill the
                                form correctly!
                            </StyleError>
                        )}
                        <Button
                            variant="dark"
                            onClick={validate}
                        >
                            order now
                        </Button>
                    </StyledFormContact>
                </ContainerContactRightSide>
            </StyledContact>
        </>
    );
};

Contact.propTypes = {};

export default Contact;
