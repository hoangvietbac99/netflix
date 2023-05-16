import classNames from "classnames/bind";
import styles from "./ScreenItem.module.scss";
import ItemVideo from "~/component/Slide/ListItem/ItemVideo";
const cx = classNames.bind(styles);

function ScreenItem({ data, onClick }) {
    return (
        <div className={cx("wrapper-sub-screen")}>
            <div className={cx("sub-screen")}>
                <ul className={cx("list-movie")}>
                    {data.map((item, index) => (
                        <li key={index} className={cx("movie-item")}>
                            <ItemVideo data={item} onClick={onClick} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default ScreenItem;
