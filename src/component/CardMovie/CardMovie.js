import classNames from "classnames/bind";
import styles from "./CardMovie.module.scss";
import MiniModal from "../MiniModal/MiniModal";
const cx = classNames.bind(styles);

function CardMovie({ data, onClick }) {
    return (
        <div className={cx("list-item")}>
            <img src={data.picture} alt="" />
            <div className={cx("mini-modal")}>
                <MiniModal onClick={onClick} data={data} />
            </div>
        </div>
    );
}

export default CardMovie;
