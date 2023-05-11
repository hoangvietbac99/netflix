import classNames from "classnames/bind";
import styles from "./OVVideo.module.scss";
const cx = classNames.bind(styles);
function OVVideo({ frame, video }) {
    return (
        <div className={cx("wrapper-video")}>
            <img className={cx("frame-video")} src={frame} alt="" />
            <video src={video} className={cx("movie")} autoPlay loop muted />
        </div>
    );
}
export default OVVideo;
