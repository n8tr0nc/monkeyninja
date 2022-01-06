import React from 'react'

import { About, Utility, Dynasty, Footer, Header, Tokenomics } from './containers';
import { CTA, Navbar } from './components';
import './App.css';

const App = () => {
    return (
        <div clasName="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <About />
            <Utility />
            <Dynasty />
            <Tokenomics />
            <CTA />
            <Footer />
        </div>
    )
}

export default App
