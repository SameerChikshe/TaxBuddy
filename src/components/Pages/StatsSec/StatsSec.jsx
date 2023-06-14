import "./StatsSec.scss"
import people from "../../../medias/people_alt.svg"
import tips from "../../../medias/tips_and_updates.svg"
import bolt from "../../../medias/bolt.svg"
import check from "../../../medias/check_filled.svg"
import Button from "../../UI_elements/Button/Button"

const statsData = [
    {
        title: "Users",
        img: people,
        est: "8 Lakh+",
        desc: "Sit back and relax. Leave the stress of tax filing to us. Let our experts help you save maximum time & taxes."
    },
    {
        title: "Impact",
        img: tips,
        est: "90%",
        desc: "Sit back and relax. Leave the stress of tax filing to us. Let our experts help you save maximum time & taxes."
    },
    {
        title: "Experience",
        img: bolt,
        est: "2002",
        desc: "Sit back and relax. Leave the stress of tax filing to us. Let our experts help you save maximum time & taxes."
    },
]

const pointsData = [
    "Personalized tax support",
    "Talk to tax experts",
    "Maximum Savings"
]

const StatItem = (props) => {
    return (
        <>
            <div className="stat_item" key={props.key}>
                <div className="title">{props.item.title}</div>
                <div className="est"><img src={props.item.img}></img>{props.item.est}</div>
                <div className="desc">{props.item.desc}</div>
            </div>
            {props.show &&
                <div className="divider_container">
                    <div className="divider"></div>
                </div>
            }
        </>
    )
}

const PointsItem = (props) => {
    return (
        <div className="item">
            <img src={check} />
            <div className="text">{props.item}</div>
        </div>
    )
}

const StatsSec = (props) => {
    return (
        <div className="stats_main">
            <div className="stats_content">
                {statsData.map((item, index) => <StatItem item={item} key={index} show={index <= 1} />)}
            </div>
            <div className="content_cta_container">
                <div className="right">
                    <div className="head">Save time by having everything in one platform.</div>
                    <div className="points">
                        {pointsData.map((item, index) => <PointsItem item={item} key={index} />)}
                    </div>
                    <Button name={"Get Started"}/>
                </div>
            </div>
        </div>
    )
}

export default StatsSec;