import React from 'react';

// Styles
import style from './Logo.module.css'

//Image
import logo from '../../../assets/img/logo.png'

const Logo = ({alignItems}) => {
    return (
        <div className={style.logo} style={{
            alignItems: alignItems
        }}>
            <img src={logo} alt="logo" draggable={false}/>
            <span>amazon</span>
        </div>
    );
};

export default Logo;