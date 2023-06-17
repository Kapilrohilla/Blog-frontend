import React from 'react';
import './Footer.scss';
const Footer = () => {
    return (
        <div className='footer'>
            <div className="top">
                <div className="col1">
                    <h3>Menu</h3>
                    <ul>
                        <li>home</li>
                        <li>Service</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>blog</li>
                    </ul>
                </div>
                <div className="col2">
                    <h3>Categories</h3>
                    <ul>
                        <li>home</li>
                        <li>Service</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>blog</li>
                    </ul>
                </div>
                <div className="aboutus">
                    <h3>About us</h3>
                    <p className="detail">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas harum error fuga sapiente officiis molestiae?
                    </p>
                    <div className="social">
                        <img src="/image/facebook.svg" alt="fb" />
                        <img src="/image/instagram.svg" alt="insta" />
                        <img src="/image/snapchat.svg" alt="snap" />
                        <img src="/image/twitter.svg" alt="tweet" />
                    </div>
                </div>

            </div>
            <div className="bottom">

            </div>
        </div>
    )
}

export default Footer
