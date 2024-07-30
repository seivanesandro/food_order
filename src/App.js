import React from 'react';

import NavBar from './components/navBar/NavBar';
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

import {
    HashRouter,
    Routes,
    Route
} from 'react-router-dom';

function App() {
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
            </HashRouter>
        </div>
    );
}

export default App;
