import React from 'react';
// PropTypes from 'prop-types'
import CardMenu from '../../components/menuItems/MenuItems';
import styled, { keyframes } from 'styled-components';
import { devices } from '../../utils/constantes';

const StyledMenu = styled.div`
    /* max-width: 92%;
    width: 89%; */
    margin: 10rem auto 25rem auto;
`;


const ContainerMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;

    @media only screen and (${devices.fourk}) {
    }
    @media only screen and (${devices.portatilL}) {
    }
    @media only screen and (${devices.portatil}) {
    }
    @media only screen and (${devices.tablet}) {
    }
    @media only screen and (${devices.iphone14}) {
    }
    @media only screen and (${devices.mobileG}) {
    }
    @media only screen and (${devices.mobileM}) {
    }
    @media only screen and (${devices.mobileP}) {
    }
`;
const MenuTitle = styled.h2`
text-align: left;

`;
const ContainerMenuList = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 2rem;

    @media only screen and (${devices.fourk}) {
    }
    @media only screen and (${devices.portatilL}) {
    }
    @media only screen and (${devices.portatil}) {
    }
    @media only screen and (${devices.tablet}) {
    }
    @media only screen and (${devices.iphone14}) {
    }
    @media only screen and (${devices.mobileG}) {
    }
    @media only screen and (${devices.mobileM}) {
    }
    @media only screen and (${devices.mobileP}) {
    }
`;


const Menu = props => {
    return (
        <>
            <StyledMenu className="menu">
                <ContainerMenu className="menu-container">
                    <MenuTitle className="menu-title">
                        Menu
                    </MenuTitle>
                    <ContainerMenuList className="menu-list">
                        <CardMenu />
                        <CardMenu />
                        <CardMenu />
                        <CardMenu />
                        <CardMenu />
                        <CardMenu />
                    </ContainerMenuList>
                </ContainerMenu>
            </StyledMenu>
        </>
    );
};

Menu.propTypes = {};

export default Menu;
