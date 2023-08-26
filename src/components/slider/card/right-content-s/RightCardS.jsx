import React from 'react';
import style from './RightCardS.module.css'

const RightCardS = ({img, name}) => (
    <img src={img} alt={name} draggable={false} className={style.image}/>
);

export default RightCardS;