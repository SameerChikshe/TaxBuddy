import "./HeroSec.scss";
import Lines from "../../../medias/lines.svg";
import Logo from "../../../medias/logo.svg";
import Vector from "../../../medias/Vector.svg";
import HeroPerson from "../../../medias/heroPerson.svg";
import HeroiPhone from "../../../medias/heroiPhone.svg";
import Button from "../../UI_elements/Button/Button";
import { motion } from "framer-motion";
import Bg from "../../UI_elements/BG_gradiant/Bg";

const HeroSec = () => {
    return (
        <Bg>
            <div className="nav__main">
                <img src={Logo}></img>
                <div className="nav__ser_pri">
                    <div className="services">
                        {" "}
                        <div className="text">Services</div>
                        <img className="icon" src={Vector}></img>
                    </div>
                    <div className="pricing">Pricing</div>
                </div>
                <div className="nav__log_sign">
                    <div className="log">Log in</div>
                    <Button name={"Sign Up"} />
                </div>
            </div>
            <div className="hero__content">
                <div className="left">
                    <div className="aim">
                        <span>Reduce</span> your taxes up to 26%
                    </div>
                    <div className="des">
                        Sit back and relax. Let our experts help you save maximum time &
                        taxes.
                    </div>
                    <div className="input_div">
                        <input type="text" placeholder="Enter your mobile number"></input>
                        <div className="submit">Submit</div>
                    </div>
                </div>
                <div className="right">
                    <motion.div
                        initial={{ opacity: 0, y: 300 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "normal", duration: 1 }}
                        viewport={{ once: true }}
                        className="person"
                    >
                        <img src={HeroPerson}></img>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 300 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: "normal", duration: 1 }}
                        viewport={{ once: true }}
                        className="Phone">
                        <img src={HeroiPhone}></img>
                    </motion.div>
                </div>
            </div>
        </Bg>
    );
};

export default HeroSec;
