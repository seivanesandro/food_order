import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../assets/logo.png'

import { TbHome } from 'react-icons/tb';
import { BiFoodMenu } from 'react-icons/bi';

import { IoMdInformationCircleOutline } from 'react-icons/io';
import { MdOutlinePhoneInTalk } from 'react-icons/md';




function OffcanvasExample() {
    return (
        <>
            {['xl'].map(expand => (
                <Navbar
                    key={expand}
                    expand={expand}
                    className="bg-body-tertiary mb-3bg-dark mb-auto color-light shadow py-4"
                    data-bs-theme="dark"
                >
                    <Container fluid>
                        <Navbar.Brand href="#">
                            <img
                                src={logo}
                                alt="app for deliver food order"
                                className="logo"
                                title="go to home"
                            />
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
                            <Offcanvas.Body>
                                <Nav className="justify-content-center flex-grow-1 pe-5 gap-5">
                                    <Nav.Link
                                        href="#action1"
                                        className="d-flex flex-row align-items-center justify-content-center gap-1 mx-5"
                                    >
                                        <TbHome
                                            size={
                                                20
                                            }
                                        />
                                        Home
                                    </Nav.Link>
                                    <Nav.Link
                                        href="#action2"
                                        className="d-flex flex-row align-items-center justify-content-center gap-1 mx-5"
                                    >
                                        <BiFoodMenu
                                            size={
                                                20
                                            }
                                        />
                                        Menu
                                    </Nav.Link>
                                    <Nav.Link
                                        href="#action3"
                                        className="d-flex flex-row align-items-center justify-content-center gap-1 mx-5"
                                    >
                                        <IoMdInformationCircleOutline
                                            size={
                                                20
                                            }
                                        />
                                        About
                                    </Nav.Link>
                                    <Nav.Link
                                        href="#action4"
                                        className="d-flex flex-row align-items-center justify-content-center gap-1 mx-5"
                                    >
                                        <MdOutlinePhoneInTalk
                                            size={
                                                20
                                            }
                                        />
                                        Contact
                                    </Nav.Link>
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
