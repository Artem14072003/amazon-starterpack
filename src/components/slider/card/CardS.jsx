import React from 'react';

import LeftCardS from "./left-card-s/LeftCardS";
import RightCardS from "./right-content-s/RightCardS";

const CardS = ({product}) => {
    return (
        <>
            <LeftCardS
                name={product.name}
                detail={product.detail}
                price={product.price}
            />

            <RightCardS
                img={product.img}
                name={product.name}
            />
        </>
    );
};

export default CardS;