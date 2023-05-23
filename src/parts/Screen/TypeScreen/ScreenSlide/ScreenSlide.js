import Slide from "~/component/Slider/Slider";
import classNames from "classnames/bind";
import styles from "./ScreenSlide.module.scss";
import BillBoard from "~/component/BillBoard/BillBoard";

const cx = classNames.bind(styles);

function ScreenList({ data, onClick }) {
    return (
        <div className={cx("wrapper-main-content")}>
            <BillBoard onClick={onClick} />
            <div className={cx("wrapper-slider")}>
                <Slide data={data} onClick={onClick} />
                <Slide data={data} onClick={onClick} />
                <Slide data={data} onClick={onClick} />
            </div>
        </div>
    );
}

export default ScreenList;
