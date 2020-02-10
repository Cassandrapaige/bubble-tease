import React, {Component } from 'react'
import WOW from 'wowjs'

class Contact extends Component {
    componentDidMount() {
        new WOW.WOW().init();
    }

    render() {
    return (
        <div className = 'contact' id='contact'>
            <div className="left_form">
                <h1>Feeling <span>tea</span>sed yet?</h1>
                <h2>Come try it for yourself..</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos 
                    nemo vero facilis. Odio magni non error, totam facere iste.
                </p>
                <div className="contact_info">
                <ul className="footer_links">
                    <li> <i class="fas fa-map-marker-alt"></i>   
                    1186 Yonge Street, Toronto ON</li>
                    <li><i class="fas fa-mobile-alt"></i>416-882-9436</li>
                    <li><i class="far fa-envelope"></i>bubbletease@gmail.com</li>
                </ul>
                </div>
            </div>


            <form className = 'contact_form wow fadeInRight' data-wow-duration=".8s" data-wow-offset='90' data-wow-delay='.2s'>
                <h2>Send us a message</h2>
                <label htmlFor="name">Name</label>
                <input type="text"/>
                <label htmlFor="email">Your email</label>
                <input type="text"/>
                <label htmlFor="message">Message</label>
                <textarea></textarea>
                <button className="submit">SEND MESSAGE</button>
            </form>
        </div>
    )
}
}
export default Contact;
