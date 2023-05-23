import classNames from "classnames/bind";
import styles from "./Dropdown.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function Menu({ title, listItem }) {
    return (
        <div className={cx("wrapper-menu")}>
            <div className={cx("menu")}>
                <div className={cx("title-menu")}>{title}</div>
                <FontAwesomeIcon className={cx("icon-menu")} icon={faCaretUp} />
            </div>
            <ul className={cx("drop-down")}>
                {listItem.map((item, index) => (
                    <li className={cx("drop-down-item")} key={index}>
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Menu;
