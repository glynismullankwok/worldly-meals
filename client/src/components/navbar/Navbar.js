import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from '../Button/Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 1115) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()

    }, []);

    window.addEventListener('resize', showButton);

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    International Ingredients to Worldly Meals
                    {/* <i className="fas fa-utensils"></i> */}
                </Link>

                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/recipe' className='nav-links' onClick={closeMobileMenu}>
                            Recipes
                        </Link>
                    </li>



                    <li className='nav-item'>
                        <Link to='/order' className='nav-links' onClick={closeMobileMenu}>
                            Order
                            </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/nutrition' className='nav-links' onClick={closeMobileMenu}>
                            Nutrition
                            </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/signup' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Signup
                            </Link>
                    </li>

                </ul>
                {button && <Button buttonStyle='btn--outline'>Sign up</Button>}
            </div>
        </nav>
    );
}

export default Navbar;
