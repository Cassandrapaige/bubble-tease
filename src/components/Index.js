import React from 'react'
import Nav from './Nav'
import Flavours from './Flavours'
import About from './About'
import Menu from './Menu'
import Contact from './Contact'
import Footer from './Footer'
import MenuImgs from './MenuImgs'

const Index = () => {
    return (
        <div className = 'container'>
            <Nav />
            <Flavours />
            <About />
            <Menu />
            <MenuImgs/>
            <Contact />
            <Footer />
        </div>
    )
}

export default Index;
