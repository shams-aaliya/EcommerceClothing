import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.util'
import './header.style.scss';
import { ReactComponent as Logo} from '../../assets/crown.svg'

const Header = ({currentUser}) => {
    return (
        <div className='header'>
            <Link  to='/' className='logo-container'>
            <Logo className='logo'/>
            </Link>
            <div className="options">
            <Link to='/shop' className='option'>
            SHOP
            </Link>
            <Link to='/contact' className='option'>
            CONTACT
            </Link>
            {
                currentUser ? (
                    <div className='option' onClick = {() => auth.signOut()}>Sign Out</div> 
                )
                :(
                    <Link to='/sign-in' className='option'>
                    SIGN IN
                    </Link>
                )
            }
            </div>
        </div>
    )
}

export default Header
