
import React from 'react'
import {Link, NavLink} from 'react-router-dom' //link tag is used so that our page will not refresh

function Header() {
    return (
                <>
                    <header>
                        <nav>
                            <div>
                                <Link to="/">
                                    <img
                                        src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                        alt="Logo"
                                    />
                                </Link>
                                <div>
                                    <Link to="#">Log in</Link>
                                    <Link to="#">Get started</Link>
                                </div>
                                <div>
                                    <ul>
                                        <li>
                                            <NavLink to="/">Home</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/about">About</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/contact">Contact</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/github">Github</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </header>
                </>
            );
        }
        

export default Header;

