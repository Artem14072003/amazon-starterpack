import React from 'react';
import style from './MiddleSide.module.css'
import HeroImg from '../../../assets/img/hero.png'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'

const MiddleSide = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.blueCircle}/>
            <img src={HeroImg} alt="" draggable={false}/>
            <div className={style.cart2}>
                <RiShoppingBagFill/>

                <div className={style.signup}>
                    <span>Best Signup Offers</span>

                    <div>
                        <BsArrowRight/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiddleSide;