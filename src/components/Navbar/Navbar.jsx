import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';



const Navbar = () => {
    return (
        <div className='Navbar'>
            <ul className='InternalLinks'>
                <li>
                    <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
                </li>
                <li>
                    <Link to='/projects' style={{ textDecoration: 'none', color: 'white' }}>Projects</Link>
                </li>
            </ul>
            <ul className='ExternalLinks'>
                <li>
                    <a href='https://github.com/xsebastianx' target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} color='white' size='2x' />
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/sebastianarnavat/' target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} color='white' size='2x' />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
