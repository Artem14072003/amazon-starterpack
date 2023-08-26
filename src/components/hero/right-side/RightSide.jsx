import {useState} from 'react';
import style from './RightSide.module.css'

// Получаем якобы "информацию от сервера"
import data  from './../../../data/response.json'

const RightSide = ({h_side}) => {

    const res = data.responses

    const [response, setResponse] = useState({
        traffic: res.traffic,
        customers: res.customers
    })

    return (
        <div className={h_side}>
            <div className={style.traffic}>
                <span> {response.traffic}m</span>
                <span>ежемесячного трафика</span>
            </div>

            <div className={style.customers}>
                <span> {response.customers}k</span>
                <span>довольных клиентов</span>
            </div>
        </div>
    );
};

export default RightSide;