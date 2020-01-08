import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="about">
           <h2>About Us</h2> 
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Totam repellat id illo quos amet sequi corporis dolores quaerat 
               expedita nobis impedit doloribus, voluptates eligendi quibusdam, 
               sit quod! Fuga, corporis sit.
            </p>
            <div className="social">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-twitter"></i>
            </div>
            </div>

            <div className="links">
                <ul className="footer_links">
                    <li><a href ="#top">Go to top</a></li>
                    <li><a href ="#flavours">New Flavours</a></li>
                    <li><a href ="#about">Our Ingredients</a></li>
                    <li><a href ="#menuSection">Our Menu</a></li>
                    <li><a href ="#contact">Contact</a></li>
                </ul>
            </div>
            
        </div>
    )
}

export default Footer;