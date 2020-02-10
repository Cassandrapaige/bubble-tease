import React, { Component, Fragment } from 'react'
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
        
    flavours = {
        "apple": {
            img: apple,
            btnColor: '#9ac00e',
            title:'Apes for Apples'
        },
        "blueberry":{
            img: blueberry,
            btnColor: '#8b65a0',
            title:'Blue Bells'
        },
        "grape": {
            img: grape,
            btnColor: '#9F375B',
            title:'Grape Seed'
        },
        "strawberry": {
            img: strawberry,
            btnColor: '#F87877',
            title:'Rawberry Blaster'
        }
    }

    onClick = (e) => {
        let target = this.flavours[e.target.id];
        this.setState({
            img: target.img,
            btnColor: target.btnColor,
            title: target.title
        })
    }

    render() {      
    return (
    <Fragment>
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
                        <button onClick={this.onClick} id='apple'></button>
                        <button onClick={this.onClick} id='blueberry'></button>
                        <button onClick={this.onClick} id='grape'></button>
                        <button onClick={this.onClick} id='strawberry'></button>
                    </div> 
                </div>
            </div>
        </header>
    </Fragment>
    )
}
}

export default Flavours;
