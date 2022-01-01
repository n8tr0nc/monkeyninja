import React from 'react'

import { About, Blog, Features, Footer, Header, Possibility } from './containers';
import { Brand, CTA, Navbar } from './components';

const App = () => {
    return (
        <div clasName="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <About />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App
