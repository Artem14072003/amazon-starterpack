import React from 'react';

import style from './Nav.module.css'

import navigation from "./navigation";

const Nav = () => {
    return (
        <div className={style.menu}>
            <ul className={style.menu}>
                {navigation.map(i => (
                    <li key={i}>{i}</li>
                ))}
            </ul>
        </div>
    );
};

export default Nav;