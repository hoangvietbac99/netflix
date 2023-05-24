import styles from "./Skeleton.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function Skeleton() {
    return <div className={cx("skeleton")}></div>;
}
export default Skeleton;
