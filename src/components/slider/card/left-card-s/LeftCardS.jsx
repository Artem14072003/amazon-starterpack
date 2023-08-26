import React from 'react';
import style from './LeftCardS.module.css'

const LeftCardS = ({name, detail, price}) => {
    return (
        <div className={style.left_s}>
            <div className={style.name}>
                <span>{name}</span>
                <span>{detail}</span>
            </div>

            <span>{price}$</span>

            <button>Shop Now</button>
        </div>
    );
};

export default LeftCardS;