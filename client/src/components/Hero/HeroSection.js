import React from 'react';
import { Link } from 'react-router-dom'
import '../../App.css';
import{ Button }  from '../Button/Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className= 'hero-container'>
            <video src='https://giphy.com/gifs/masterchef-food-gordon-ramsay-l0MYyKbTCresSjrhK' autoPlay loop muted />
            <h1>International Cuisine at Home</h1>
            <p>Start your culinary adventure here</p>

            <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline'
            buttonSize='btn--large'>GET STARTED</Button>
            </div>
            <div className='hero-btns'>
            <Link to="/login" className='btns' buttonStyle='btn--primary'
            buttonSize='btn--large'>Login</Link>
            </div>
        </div>
    )
}

export default HeroSection;