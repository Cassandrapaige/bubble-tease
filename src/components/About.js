import React, { Component } from 'react'
import bamboo from '../images/bamboo-canes.png'
import tapioca from '../images/tapioca.png'
import tea from '../images/tea.png'
class About extends Component {

    render() {
    return (
        <div className='info' id='about'>
            <h3>At <span className='name'>Bubble </span><span className='contrast'>Tea</span>se</h3>
            <h6> We use only the freshest ingredients we can find</h6>
            <div className='ingredients'>
            <div className='ingredients__item wow fadeInUp' data-wow-duration=".7s" data-wow-offset='90' data-wow-delay='.7s'>
                <img src={bamboo} alt='bamboo'/>
                <h2>Sugar Cane</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus at non deleniti ut earum optio
                    accusantium odit ipsa eius tempore?</p>
            </div>
            <div className='ingredients__item wow fadeInUp' data-wow-duration=".7s" data-wow-offset='90' data-wow-delay='.5s'>
                <img src={tapioca} alt='tapioca'/>
                <h2>Tapioca</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium assumenda labore quam accusamus
                    nihil perferendis quasi dicta voluptatibus esse. Tempore.
                </p>
            </div>
            <div className='ingredients__item wow fadeInUp' data-wow-duration=".7s" data-wow-offset='90' data-wow-delay='.3s'>
                <img src={tea} alt='tea leaves' />
                <h2>Tea Leaves</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore fugiat optio aperiam dolor, iste
                    repudiandae porro quas autem nihil.</p>
            </div>
        </div>
        </div>
    )
}
}

export default About;