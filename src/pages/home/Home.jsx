import React from 'react';
import { useNavigate } from 'react-router-dom';
//import PropTypes from 'prop-types'
import styled, {
    keyframes
} from 'styled-components';
import banner from '../../assets/banner.jpg';
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

const StyleHome = styled.div`
    max-width: 100%;
    width: 100%;
    height: 93vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${banner}) !important;
    object-fit: cover !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
    background-size: cover !important;

    animation: ${Show} 1s ease-in;
`;
const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    margin: 0rem 15rem;
    gap: 1.6rem;

    @media only screen and (${devices.fourk}) {
        margin: 0rem 13rem;
    }
    @media only screen and (${devices.portatilL}) {
        margin: 0rem 8rem;
    }
    @media only screen and (${devices.portatil}) {
        margin: 0rem 3rem;
    }
    @media only screen and (${devices.tablet}) {
        gap: 1.5rem;
        margin: 0rem 2rem;
    }
    @media only screen and (${devices.iphone14}) {
        gap: 1.5rem;
        margin: 0rem 1rem;
    }
    @media only screen and (${devices.mobileG}) {
        gap: 1.5rem;
        margin: 0rem 1rem;
    }
    @media only screen and (${devices.mobileM}) {
        gap: 1.5rem;
        margin: 0rem 1rem;
    }
    @media only screen and (${devices.mobileP}) {
        gap: 1.5rem;
        margin: 0rem 1rem;
    }
`;

const TitleHome = styled.h2`
    text-align: left;
    color: #fff;
    font-size: 6rem;
    animation: ${Show} 1.3s ease-in;

    @media only screen and (${devices.tablet}) {
        font-size: 4rem;
    }
    @media only screen and (${devices.iphone14}) {
        font-size: 2.5rem;
    }
    @media only screen and (${devices.mobileG}) {
        font-size: 2.5rem;
    }
    @media only screen and (${devices.mobileP}) {
        font-size: 2rem;
    }
`;
const DescriptionHome = styled.p`
    color: #fff;
    font-size: 1.5rem;
    width: 50%;
    animation: ${Show} 1.5s ease-in;

    @media only screen and (${devices.tablet}) {
        font-size: 1.1rem;
        width: 70%;
    }
    @media only screen and (${devices.iphone14}) {
        font-size: 1.1rem;
        width: 84%;
    }
    @media only screen and (${devices.mobileG}) {
        font-size: 1.1rem;
        width: 84%;
    }
    @media only screen and (${devices.mobileM}) {
        font-size: 1.1rem;
        width: 84%;
    }
    @media only screen and (${devices.mobileP}) {
        font-size: 1.1rem;
        width: 92%;
    }
`;
const BtnHome = styled.button`
    background: #fff;
    color: #333;
    margin-top: 1.1rem;
    padding: 0.3rem 5rem;

    font-size: 2rem;
    font-weight: 600;

    border-radius: 6rem;
    animation: ${Show} 1.1s ease-out;

    &:hover {
        background: rgb(70, 242, 248);
        color: #333;
        cursor: pointer;
        box-shadow: 0 0 0.4rem rgb(70, 242, 248);
        transition: 0.3s ease-in;
    }

    @media only screen and (${devices.iphone14}) {
        font-size: 1.5rem;
    }
    @media only screen and (${devices.mobileG}) {
        font-size: 1.5rem;
    }
    @media only screen and (${devices.mobileM}) {
        font-size: 1.5rem;
    }
    @media only screen and (${devices.mobileP}) {
        font-size: 1.5rem;
    }
`;

const Home = props => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/menu');
    };

    return (
        <>
            <StyleHome className="home">
                <ContainerHome className="container-home">
                    <TitleHome className="title-home">
                        Sabores da Avó Online
                    </TitleHome>
                    <DescriptionHome className="description-home">
                        "Em cada garfada, um
                        abraço da avó. Sabores que
                        nos transportam para a
                        infância, para momentos
                        simples e felizes. A
                        cozinha portuguesa, um
                        tesouro a ser descoberto
                        em cada prato, um legado
                        de gerações que perdura no
                        tempo."
                    </DescriptionHome>
                    <BtnHome
                        className="btn btn-light btn-home"
                        onClick={handleClick}
                    >
                        Order
                    </BtnHome>
                </ContainerHome>
            </StyleHome>
        </>
    );
};

Home.propTypes = {};

export default Home;
