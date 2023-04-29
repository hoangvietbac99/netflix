import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const cx = classNames.bind(styles);
function Menu({ title, listItem }) {
    const [rotate, setRotate] = useState(false);
    const handleRotate = () => {
        setRotate(!rotate);
    };
    return (
        <div className={cx("wrapper-menu")} onClick={() => handleRotate()}>
            <div className={cx("menu")}>
                <div className={cx("title-menu")}>{title}</div>
                <FontAwesomeIcon
                    className={cx("icon-menu", rotate && "rotate-icon")}
                    icon={faCaretUp}
                />
            </div>
            {rotate && (
                <div className={cx("drop-down")}>
                    {listItem.map((item, index) => (
                        <div className={cx("drop-down-item")} key={index}>
                            {item.title}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
export default Menu;
