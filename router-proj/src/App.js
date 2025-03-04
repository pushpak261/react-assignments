import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Contact from './Contact/Contact';


//In App.js we are rendering components

export default function App() {
    return (
        <BrowserRouter>
            <h1>React Router</h1>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}
