import React from 'react'
import "./ReviewCard.scss"
import verified from "./Media/verified.png"
import google from "./Media/Google.png"
import rating_star from "./Media/rating_star.png"
import rating_star_half from "./Media/rating_star_half.png"
import { motion } from "framer-motion";

export const ReviewCard = (props) => {

    return (
            <motion.div initial={{ opacity: 0, y: 300 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "normal", duration: 1 }}
            viewport={{ once: true }} className='review_card'>
                <div className='user_details'>
                    <div className='user'>
                        <div><img className='profile_pic' src={props.pic} alt="user1" title="user1" /></div>
                        <div className='user_info'>
                            <div className='user_name'>{props.name}<img src={verified} alt="verified" title="verified" /> </div>
                            <div className='review_info'>{props.time}</div>
                        </div>
                    </div>
                </div>
                <div className='review'>
                    {props.review_text}
                </div>

                <div className='rating_container'>
                    <div><img src={google} className="google_icon" alt="google" title="google" /></div>
                    <div className='rating_box'>
                        <div className='google_review'>Google Reviews </div>
                        <div className='rating_details'>
                            <div className='number'>{props.rating}</div>
                            <div className='star_list'>
                                <img className='star' src={rating_star} alt="rating_star" title="rating_star" />
                                <img className='star' src={rating_star} alt="rating_star" title="rating_star" />
                                <img className='star' src={rating_star} alt="rating_star" title="rating_star" />
                                <img className='star' src={rating_star} alt="rating_star" title="rating_star" />
                                <img className='star' src={rating_star_half} alt="rating_star_half" title="rating_star_half" />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
    )
}
