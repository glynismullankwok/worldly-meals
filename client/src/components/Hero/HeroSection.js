import React from 'react';
import { Link } from 'react-router-dom'
import '../../App.css';
import{ Button }  from '../Button/Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className= 'hero-container'>
            <video src='https://giphy.com/gifs/masterchef-food-gordon-ramsay-l0MYyKbTCresSjrhK' autoPlay loop muted />
            <p>&nbsp;</p>
            <h1>International Cuisine at Home: Start your culinary adventure here</h1>
            {/* <p>Start your culinary adventure here</p> */}

            <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline'
            buttonSize='btn--small'>Sign Up</Button>
            <p>&nbsp;</p> 
            <Button to="/login" className='btns' buttonStyle='btn--outline'
            buttonSize='btn--small'>Login</Button>
            </div>
            {/* <div className='hero-btns'>
            <Link to="/login" className='btns' buttonStyle='btn--primary'
            buttonSize='btn--small'>Login</Link>
            </div> */}
        </div>
    )
}

export default HeroSection;