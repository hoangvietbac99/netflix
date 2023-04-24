import classNames from "classnames/bind";
import styles from "./OVTitle.module.scss"
const cx=classNames.bind(styles)
function OVTitle({h2, p}){
    return (
        <div className={cx("wrapper-title")}>
            <h2>{h2}</h2>
            <p>{p}</p>
        </div>
    )
}
export default OVTitle