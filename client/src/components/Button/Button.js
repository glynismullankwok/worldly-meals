import React from 'react';

import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({children, type, onClick, buttonstyle, buttonsize}) =>{

    const checkButtonStyle = STYLES.includes(buttonstyle) ? buttonstyle : STYLES[0];

    const checkButtonsize = SIZES.includes(buttonsize) ? buttonsize : SIZES[0];

    return (
        <Link to = '/signup' className='btn-mobile'>
          <button 
          className={`btn ${checkButtonStyle} ${checkButtonsize}`}
          onClick={onClick}
          type={type}
          >
              {children}
            </button>  
        </Link>
    )
};