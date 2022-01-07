import React from 'react'

import { About, Utility, Dynasty, Footer, Header, Tokenomics } from './containers';
import { CTA, Navbar } from './components';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="body">
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
