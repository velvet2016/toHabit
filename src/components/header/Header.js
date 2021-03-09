import React from 'react';
import { Link } from 'react-router-dom'
import './header.css';

const Header = () => {
    return (
        <div className='header row'>
            <Link to='/'>
                <div className='logo text-dark'>toHabit</div>
            </Link>
            <Link to="/login" className='login'>
                login
            </Link>
        </div>
    )
};

export default Header;