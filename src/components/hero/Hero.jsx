import style from './Hero.module.css'
import LeftSide from "./left-side/LeftSide";
import MiddleSide from "./middle-side/MiddleSide";
import RightSide from "./right-side/RightSide";

const Hero = () => {
    return (
        <div className={style.container}>
            <LeftSide
                h_side={style.h_side}
            />
            <MiddleSide />
            <RightSide
                h_side={style.h_side}
            />
        </div>
    );
};

export default Hero;