import React from 'react';
import style from './LeftSide.module.css'

const LeftSide = ({h_side}) => (
    <div className={h_side}>
        <span className={style.text1}>Skin protection cream</span>

        <div className={style.text2}>
            <span>Trendy Collection</span>
            <span>Seedily say has suitable disposal and boy. Exercise joy man children rejoiced.</span>
        </div>
    </div>
);

export default LeftSide;