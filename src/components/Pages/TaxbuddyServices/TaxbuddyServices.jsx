import React from 'react'
import "./TaxbuddyServices.scss"
import Bg from '../../UI_elements/BG_gradiant/Bg'
import Button from '../../UI_elements/Button/Button'
import S1 from "../../../medias/Screen1.svg"
import S2 from "../../../medias/Screen2.svg"
import S3 from "../../../medias/Screen3.svg"
import { motion } from "framer-motion";

const TaxbuddyServices = () => {
    return (
        <Bg section={2}>
            <div className="ts_main">
                <div className='left'>
                    <div className='content'>
                        <div className='label'>What you can do with TaxBuddy</div>
                        <div className='title'>Plan your tax</div>
                        <div className='desc'>You can keep track of all your income and expenses throughout the year, which can make filing your taxes much easier.</div>
                        <Button name="Start Planing" />
                    </div>
                </div>
                <div className='right'>
                    <div className='content'>
                        <div className='two_images'>
                            <motion.img
                             initial={{ opacity: 0,x:-300}}
                             whileInView={{ opacity: 1,x:0}}
                             transition={{ type: "normal", duration: 2 }}
                             viewport={{ once: true }}
                            src={S1}></motion.img>
                            <motion.img 
                             initial={{ opacity: 0,x:300}}
                             whileInView={{ opacity: 1,x:0}}
                             transition={{ type: "normal", duration: 2 }}
                             viewport={{ once: true }}
                            src={S3}></motion.img>
                        </div>
                        <motion.img 
                         initial={{ opacity: 0,scale:0}}
                         whileInView={{ opacity: 1,scale:1}}
                         transition={{ type: "normal", duration: 1 }}
                         viewport={{ once: true }}
                        className='over_head_img' src={S2}></motion.img>
                    </div>
                </div>
            </div>
        </Bg>
    )
}

export default TaxbuddyServices