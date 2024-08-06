import React from 'react';

import NavBar from './components/navBar/NavBar';
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';

import {
    HashRouter,
    Routes,
    Route
} from 'react-router-dom';
import Footer from './components/footer/Footer';

function App() {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className="App">
            <HashRouter>
                <NavBar />
                <Routes>
                    <Route
                        path="/"
                        and
                        element={<Home />}
                    />
                    <Route
                        path="/menu"
                        and
                        element={<Menu />}
                    />
                    <Route
                        path="/about"
                        and
                        element={<About />}
                    />
                    <Route
                        path="/contact"
                        and
                        element={<Contact />}
                    />
                </Routes>

                <Footer
                    instagram={
                        <FaInstagram
                            color="#fff"
                            size="50"
                            title="link disable"
                            className="icon-style"
                        />
                    }
                    twitter={
                        <FaXTwitter
                            color="#fff"
                            size="50"
                            title="link disable"
                            className="icon-style"
                        />
                    }
                    facebook={
                        <FaFacebook
                            color="#fff"
                            size="50"
                            title="link disable"
                            className="icon-style"
                        />
                    }
                    linkedin={
                        <FaLinkedin
                            color="#fff"
                            size="50"
                            title="link disable"
                            className="icon-style"
                        />
                    }
                    year={year}
                />
            </HashRouter>
        </div>
    );
}

export default App;
