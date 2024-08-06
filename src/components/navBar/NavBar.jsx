import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../assets/logo.png';

import { TbHome } from 'react-icons/tb';
import { BiFoodMenu } from 'react-icons/bi';

import { IoMdInformationCircleOutline } from 'react-icons/io';
import { MdOutlinePhoneInTalk } from 'react-icons/md';

import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const StyleImg = styled.img`
    width: 200px !important;
    height: 48px !important;
    &:hover {
        cursor: pointer !important;
    }
`;

function OffcanvasExample() {
    return (
        <>
            {['xl'].map(expand => (
                <Navbar
                    key={expand}
                    expand={expand}
                    sticky="top"
                    className="bg-body-tertiary mb-3 bg-dark mb-auto color-light shadow py-1"
                    data-bs-theme="dark"
                >
                    <Container fluid>
                        <Navbar.Brand>
                            <NavLink
                                to="/"
                                title="go to home"
                                style={{
                                    outline:
                                        'none',
                                    border: 'none',
                                    boxShadow:
                                        'none'
                                }}
                            >
                                <StyleImg
                                    src={logo}
                                    alt="app for deliver food order"
                                    className="logo-img"
                                    title="go to home"
                                />
                            </NavLink>
                        </Navbar.Brand>
                        <Navbar.Toggle
                            aria-controls={`offcanvasNavbar-expand-${expand}`}
                            style={{
                                outline: 'none',
                                border: 'none',
                                boxShadow: 'none'
                            }}
                        />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start"
                            data-bs-theme="dark"
                            style={{
                                opacity: 0.9,
                                paddingTop: '30px'
                            }}
                        >
                            <Offcanvas.Header
                                closeButton
                            >
                                <Offcanvas.Title
                                    id={`offcanvasNavbarLabel-expand-${expand}`}
                                >
                                    Deliver Food
                                    app
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body className="navoffcanvas">
                                <Nav className="justify-content-center text-center pe-5 gap-5">
                                    <NavLink
                                        to="/"
                                        className={({
                                            isActive
                                        }) =>
                                            isActive
                                                ? 'active nav-link d-flex flex-row align-items-start justify-content-center gap-1 mx-5'
                                                : 'nav-link font-weight-bolder d-flex flex-row align-items-start justify-content-center gap-1 mx-5'
                                        }
                                        title="go to home"
                                        style={{
                                            outline:
                                                'none',
                                            border: 'none',
                                            boxShadow:
                                                'none'
                                        }}
                                    >
                                        <TbHome
                                            size={
                                                20
                                            }
                                        />
                                        Home
                                    </NavLink>
                                    <NavLink
                                        to="/menu"
                                        className={({
                                            isActive
                                        }) =>
                                            isActive
                                                ? 'active nav-link font-weight-bolder d-flex flex-row align-items-start justify-content-center gap-1 mx-5'
                                                : 'nav-link font-weight-bolder d-flex flex-row align-items-start justify-content-center gap-1 mx-5'
                                        }
                                        title="go to Menu"
                                        style={{
                                            outline:
                                                'none',
                                            border: 'none',
                                            boxShadow:
                                                'none'
                                        }}
                                    >
                                        <BiFoodMenu
                                            size={
                                                20
                                            }
                                        />
                                        Menu
                                    </NavLink>
                                    <NavLink
                                        to="/about"
                                        className={({
                                            isActive
                                        }) =>
                                            isActive
                                                ? 'active nav-link font-weight-bolder d-flex flex-row align-items-start justify-content-center gap-1 mx-5'
                                                : 'nav-link font-weight-bolder d-flex flex-row align-items-start justify-content-center gap-1 mx-5'
                                        }
                                        title="go to About"
                                        style={{
                                            outline:
                                                'none',
                                            border: 'none',
                                            boxShadow:
                                                'none'
                                        }}
                                    >
                                        <IoMdInformationCircleOutline
                                            size={
                                                20
                                            }
                                        />
                                        About
                                    </NavLink>
                                    <NavLink
                                        to="/contact"
                                        className={({
                                            isActive
                                        }) =>
                                            isActive
                                                ? 'active nav-link font-weight-bolder d-flex flex-row align-items-start justify-content-center gap-1 mx-5'
                                                : 'nav-link font-weight-bolder d-flex flex-row align-items-start justify-content-center gap-1 mx-5'
                                        }
                                        title="go to Contact"
                                        style={{
                                            outline:
                                                'none',
                                            border: 'none',
                                            boxShadow:
                                                'none'
                                        }}
                                    >
                                        <MdOutlinePhoneInTalk
                                            size={
                                                20
                                            }
                                        />
                                        Contact
                                    </NavLink>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default OffcanvasExample;
