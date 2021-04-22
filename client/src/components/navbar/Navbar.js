import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
    const history = useHistory()
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false)
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };
    useEffect(() => {
        Login()
    }, []);

    useEffect(() => {
        Logout()
    }, [])

    const Login = () => {
        // e.preventDefault()
        console.log('Login')
        axios.post('/api/user/login').then(res => {
            console.log(res)
            if (res.data) {
                setLoggedIn(true)
                console.log('hide nave')
                history.push('/recipe')
            }
            else {
                console.log('show nave')

                setLoggedIn(false)
            }

        })
    }

    const Logout = () => {
        // e.preventDefault()
        console.log('Logout')
        axios.post('/api/user/logout').then(res => {
            console.log(res)
            if (res.data) {
                setLoggedIn(false)
                console.log('hide nave')
                history.push('/')
            }else {
                console.log('show nave')
                setLoggedIn(true)
            }
        })
    }

    useEffect(() => {
        showButton()

    }, []);

    window.addEventListener('resize', showButton);

    return (

        <>
            {!loggedIn ? (
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
                            {/* <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li> */}

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
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                    Logout
                            </Link>
                            </li>

                            {/* <li className='nav-item'>
                                <Link to='/signup' className='nav-links-mobile' onClick={closeMobileMenu}>
                                    Signup
                            </Link>
                            </li> */}
                        </ul>
                        {/* {button && <Button buttonStyle='btn--outline'>Sign up</Button>} */}
                    </div>
                </nav>
            ) : (

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

                            {/* <li className='nav-item'>
                                <Link to='/recipe' className='nav-links' onClick={closeMobileMenu}>
                                    Recipes
                                 </Link>
                            </li> */}

                            {/* <li className='nav-item'>
                                <Link to='/order' className='nav-links' onClick={closeMobileMenu}>
                                    Order
                            </Link>
                            </li> */}

                            {/* <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                    Logout
                            </Link>

                            </li> */}

                            <li className='nav-item'>
                                <Link to='/signup' className='nav-links-mobile' onClick={closeMobileMenu}>
                                    Signup
                            </Link>
                            </li>
                        </ul>
                        {/* {button && <Button buttonStyle='btn--outline'>Sign up</Button>} */}
                    </div>
                </nav>
            )}
        </>

    );
}

export default Navbar;
