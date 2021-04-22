import React from 'react';
import { Link } from 'react-router-dom'
import '../../App.css';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='https://giphy.com/gifs/masterchef-food-gordon-ramsay-l0MYyKbTCresSjrhK' autoPlay loop muted />
            <p>&nbsp;</p>
            <h1>International Cuisine at Home: Start your culinary adventure here</h1>
            <div className='hero-btns'>
                <Link to='/signup' className='btns' buttonStyle='btn--outline'
                    buttonSize='btn--small'>Sign Up</Link>
                <p>&nbsp;</p>
                <Link to="/login" className='btns' buttonStyle='btn--outline'
                    buttonSize='btn--small'>Login</Link>
            </div>
        </div>
    )
}

export default HeroSection;