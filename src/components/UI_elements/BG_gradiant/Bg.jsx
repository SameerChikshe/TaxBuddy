import React from 'react'
import Lines from "../../../medias/lines.svg";
import { motion } from "framer-motion";
import "./Bg.scss"

const Bg = ({ children , section = 0}) => {
    return (
        <motion.div
            className="hero__main">
            <div className="lines_img">
                <img src={Lines}></img>
            </div>
            <div className={`${section === 2 ? "elipse2" : "elipse"}`}></div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ type: "normal", duration: 2 }}
                viewport={{ once: true }}
                className="content_main_div">
                {children}
            </motion.div>
        </motion.div>
    )
}

export default Bg