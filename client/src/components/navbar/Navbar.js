import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useStoreContext } from '../../utils/context/GlobalState';
import { LOGOUT_USER } from '../../utils/context/action';
import './Navbar.css';

const Navbar = () => {
    const history = useHistory()
    const [state, dispatch] = useStoreContext();
    const [click, setClick] = useState(false);
    const [, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    const handleLogout = (e) => {
        e.preventDefault()
        axios.post('/api/user/logout').then(res => {
            window.onunload = () => {
                window.localStorage.clear();
            };
            dispatch({ type: LOGOUT_USER });
            history.push('/');
        })
    }

    useEffect(() => {
        showButton();

    }, []);

    window.addEventListener('resize', showButton);

    return (

        <>
            {state.userLogin ? (
                <nav className='navbar'>
                    <div className='navbar-container'>
                        <Link to='/recipe' className='navbar-logo' onClick={closeMobileMenu}>
                             <i className="fas fa-utensils">Worldly Meals</i>
                        </Link>

                        <div className='menu-icon' onClick={handleClick}>
                            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                        </div>

                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        
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
                                <button onClick={handleLogout} className='nav-links li-btn'>
                                    Logout
                                </button>
                            </li>

                        </ul>
                    </div>
                </nav>
            ) : (

                <nav className='navbar'>
                    <div className='navbar-container'>
                        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                            <i className="fas fa-utensils"> International Ingredients to Worldly Meals </i>
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

                        </ul>
                    </div>
                </nav>
            )}
        </>

    );
}

export default Navbar;
