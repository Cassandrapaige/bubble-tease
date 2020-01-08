import React, { Component } from 'react'
import blueberry from '../images/blueberry.png'
import apple from '../images/apple.png'
import grape from '../images/grape.png'
import strawberry from '../images/strawberry.png'

class Flavours extends Component {
    constructor(props) {
        super();
        this.state = {
            img: apple,
            btnColor: '#9ac00e',
            title: 'Apes for Apples',
            description: 'Mollitia aspernatur rem, quaerat, temporibus distinctio illum ut iste sint voluptate fugiat adipisci doloribus tempore.'
        }
    }

    apples = (e) => {
        e.preventDefault();
        this.setState({
            img: apple,
            btnColor: '#9ac00e',
            title:'Apes for Apples',
        })
    }

    blueberry = (e) => {
        e.preventDefault();
        this.setState({
            img: blueberry,
            btnColor: '#8b65a0',
            title:'Blue Bells',
        })
    }

    grape = (e) => {
        e.preventDefault();
        this.setState({
            img: grape,
            btnColor: '#9F375B',
            title:'Grape Seed',
        })
    }

    strawberry = (e) => {
        e.preventDefault();
        this.setState({
            img: strawberry,
            btnColor: '#F87877',
            title:'Rawberry Blaster',
        }) 
    }

    render() {      
    return (
         <>
        <header>
           <div className="flavour" id="flavours">
                <div className="flavour_left">
                    <h1>Flavours <br/> of the month</h1>
                    <a href="#menuSection"><button style={{ backgroundColor: this.state.btnColor}} className="btn">See our menu</button></a>
                </div>
                <div className="flavour_image">
                    <img src={this.state.img} alt={this.state.title}/>
                </div>
                <div className="flavour_desc">
                    <h2>{this.state.title}</h2>
                    <p>{this.state.description}</p>
                    <div className="flavour_nav_list">
                        <button onClick={this.apples} id='apple'></button>
                        <button onClick={this.blueberry} id='blueberry'></button>
                        <button onClick={this.grape} id='grape'></button>
                        <button onClick={this.strawberry} id='strawberry'></button>
                    </div> 
                </div>
            </div>
        </header>
    </>
    )
}
}

export default Flavours;
