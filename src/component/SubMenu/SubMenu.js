import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./SubMenu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import icons from "~/assets/svg/icons";
import linkPage from "../../pages/LinkPage/linkPage";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);

const subMenu = [
    {
        icon: icons.iconPencil,
        content: "Quản lý hồ sơ",
    },
    {
        icon: icons.iconChangeAccount,
        content: "Chuyển hồ sơ",
    },
    {
        icon: icons.iconPerson,
        content: "Tài khoản",
    },
    {
        icon: icons.iconQuestion,
        content: "Trung tâm trợ giúp",
    },
];
function SubMenu() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUserData = () => {
            fetch("http://localhost:3001/account")
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    return setUsers(data);
                });
        };
        fetchUserData();
    }, []);
    return (
        <div className={cx("wrapper")}>
            <FontAwesomeIcon className={cx("call-out")} icon={faCaretUp} />
            <div className={cx("menu-account")}>
                {/* account */}
                <div className={cx("account-items")}>
                    <ul className={cx("account-list")}>
                        {users.map((user, index) => (
                            <li key={index} className={cx("account")}>
                                <img
                                    className={cx("avatar")}
                                    src={user.avatar}
                                    alt=""
                                />
                                <span className={cx("account-name")}>
                                    {user.name}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* sub menu */}
                <div className={cx("wrapper-sub-menu")}>
                    <ul className={cx("sub-menu")}>
                        {subMenu.map((item, index) => (
                            <li key={index} className={cx("sub-menu-item")}>
                                <img
                                    className={cx("icon-sub-menu")}
                                    src={item.icon}
                                    alt=""
                                />
                                <span className={cx("content-sub-menu")}>
                                    {item.content}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={cx("log-out")}>
                    <Link to={linkPage.signUp} className={cx("log-out-now")}>
                        Đăng xuất khỏi Netflix
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SubMenu;
