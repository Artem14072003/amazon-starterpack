import React from 'react';

// Styles
import styles from './Header.module.css'

// React-icons
import {CgShoppingBag} from 'react-icons/cg'

// Components
import Logo from "../../UI/logo/Logo";
import Nav from "./nav/Nav";

const Header = () => {
    return (
        <div className={styles.container}>
            {/*Передаём сюда как текст будет располагаться*/}
            <Logo alignItems={'center'}/>

            <div className={styles.right}>
                <Nav />

                <input
                    type="search"
                    className={styles.search}
                    placeholder={'Поиск'}
                />

                <CgShoppingBag size={24} className={styles.basket} />
            </div>
        </div>
    );
};

export default Header;