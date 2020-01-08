import React from 'react'
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <nav className="nav" id="top">
            <ul className="nav_list">
                <Link to='/'><li className="nav_brand">
                    <h1 className='title'>Bubble <span>tea</span>se</h1>
                </li></Link>
                <a href='#about'><li className="nav_list_item">About</li></a>
                <a href='#menuSection'><li className="nav_list_item">Menu</li></a>
                <a href='#contact'><li className="nav_list_item">Contact</li></a>
            </ul>
        </nav>
    )
}

export default Nav;