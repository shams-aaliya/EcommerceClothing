import React from 'react';
import './custom-button.styles.scss'

const CustomButton = ({isGoogleSignIn, children, ...otherprops}) => {
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherprops}>
        {children}
        </button>
    )
}

export default CustomButton;