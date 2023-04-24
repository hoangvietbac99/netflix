import classNames from "classnames/bind";
import styles from "./OVVideo.module.scss"
const cx=classNames.bind(styles)
function OVVideo({frame, video}){
    return (
        <div className={cx("wrapper-video")}>
            <img className={cx("frame-video")} src={frame} alt="" />
            <video className={cx("movie")} auto="true" loop muted >
                <source src={video} type="video/mp4" />
            </video>
        </div>
    )
}
export default OVVideo