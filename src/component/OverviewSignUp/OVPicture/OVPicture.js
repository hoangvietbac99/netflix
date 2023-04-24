import classNames from "classnames/bind";
import styles from "./OVPicture.module.scss"
const cx=classNames.bind(styles)
function OVPicture({pic}){
    return (
        <div className={cx("wrapper-picture")}>
            <img src={pic} alt="" />
        </div>
    )
}
export default OVPicture