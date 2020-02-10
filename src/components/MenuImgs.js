import React, { Component } from 'react'
import apple from '../images/apple.png'
import blueberry from '../images/blueberry.png'
import grape from '../images/grape.png'
import strawberry from '../images/strawberry.png'
import WOW from 'wowjs'


class MenuImgs extends Component {
    componentDidMount() {
        new WOW.WOW().init();
    }

    render() {    
    return (
        <div className = 'menu-imgs'>
            <div className="images">
                <img className='image wow fadeInLeft' data-wow-duration=".4s" data-wow-offset='80' data-wow-delay='.8s' src={apple} alt="apple tea"/>
                <img className='image wow fadeInLeft' data-wow-duration=".4s" data-wow-offset='80' data-wow-delay='.6s' src={blueberry} alt="blueberry tea"/>
                <img className='image wow fadeInLeft' data-wow-duration=".4s" data-wow-offset='80' data-wow-delay='.4s' src={grape} alt="grape tea"/>
                <img className='image wow fadeInLeft' data-wow-duration=".4s" data-wow-offset='80' data-wow-delay='.2s' src={strawberry} alt="strawberry tea"/>
            </div>
        </div>
    )
}
}

export default MenuImgs;