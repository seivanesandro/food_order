import React from 'react';
// PropTypes from 'prop-types'
import {MenuList} from '../../data/MenuList';
import CardMenu from '../../components/menuItems/MenuItems';
import styled, { keyframes } from 'styled-components';
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


const StyledMenu = styled.div`
    /* max-width: 92%;
    width: 89%; */
    margin: 3rem auto 13rem auto;
    height: auto;
`;

const ContainerMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

`;
const MenuTitle = styled.h2`
    text-align: start;
`;
const ContainerMenuList = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 5rem;
    justify-content: flex-start;
    align-items: center;
    margin-left: 5rem;
    animation: ${Show} 1.5s ease-in;

    @media only screen and (${devices.fourk}) {
        margin-left: 5rem;
    }
    @media only screen and (${devices.portatilL}) {
        margin-left: 8rem;
    }
    @media only screen and (${devices.portatil}) {
        margin-left: 4rem;
    }
    @media only screen and (${devices.tablet}) {
        margin-left: 6rem;
    }
    @media only screen and (${devices.iphone14}) {
        margin-left: 5rem;
    }
    @media only screen and (${devices.mobileG}) {
        margin-left: 5rem;
    }
    @media only screen and (${devices.mobileM}) {
        margin-left: 3rem;
    }
    @media only screen and (${devices.mobileP}) {
        margin-left: 1.5rem;
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
                        {MenuList.map((item)=>{
                            return (
                                <CardMenu
                                        key={
                                            item.id
                                        }
                                        imgurl={
                                            item.image
                                        }
                                        cardtitle={
                                            item.name
                                        }
                                        cardtext={
                                            item.price
                                        }
                                    />
                            );
                            
                        })}
                    </ContainerMenuList>
                </ContainerMenu>
            </StyledMenu>
        </>
    );
};

Menu.propTypes = {};

export default Menu;
