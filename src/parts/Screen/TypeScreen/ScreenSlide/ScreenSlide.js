// import Slide from "~/component/Slide/Slide/Slide";
import classNames from "classnames/bind";
import styles from "./ScreenSlide.module.scss";
import BillBoard from "~/component/BillBoard/BillBoard";

const cx = classNames.bind(styles);

function ScreenList() {
    return (
        <div className={cx("wrapper-main-content")}>
            <BillBoard />
            <div className={cx("wrapper-slider")}>
                {/* <Slide />
                <Slide /> */}
            </div>
        </div>
    );
}

export default ScreenList;
