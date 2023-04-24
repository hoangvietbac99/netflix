import classNames from "classnames/bind";
import styles from "./OVSignUp.module.scss"
import OverviewPicture from "./OVPicture/OVPicture";
import OverviewVideo from "./OVVideo/OVVideo";
import TitleSignUp from "./OVTitle/OVTitle";
const cx = classNames.bind(styles)

function OVSignUp({pic, frame, video, h2, p,...props}) {
    return (
        <div className={cx("wrapper-overview-sign-up")}>
            <div className={cx("line")}></div>
            {pic && <div className={cx("wrapper-picture")}>
                <OverviewPicture  pic={pic} {...props} />
            </div>}
            <div className={cx("wrapper-title")}>
                <TitleSignUp  h2={h2} p={p} />
            </div>
            {video && <div className={cx("wrapper-video")}>
                <OverviewVideo  frame={frame} video={video}/>
            </div>}
        </div>
    )
}
export default OVSignUp