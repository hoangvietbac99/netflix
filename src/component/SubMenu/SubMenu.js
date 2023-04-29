import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./SubMenu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import icons from "~/assets/svg/icons";
import avatar from "~/assets/images/avatarAccounts";
import linkPage from "../../pages/LinkPage/linkPage";
const cx = classNames.bind(styles);
const accounts = [
  {
    avatar: avatar.avatarBlue,
    accountName: "Hoàng Việt Bắc",
  },
  {
    avatar: avatar.avatarRed,
    accountName: "Hoàng Đức Giang",
  },
  {
    avatar: avatar.avatarGreen,
    accountName: "Hoàng Anh Lập",
  },
  {
    avatar: avatar.avatarYellow,
    accountName: "Phạm Thanh Huyền",
  },
];
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
  return (
    <div className={cx("wrapper")}>
      <FontAwesomeIcon className={cx("call-out")} icon={faCaretUp} />
      <div className={cx("menu-account")}>
        {/* account */}
        <div className={cx("account-items")}>
          <ul className={cx("account-list")}>
            {accounts.map((account, index) => (
              <li key={index} className={cx("account")}>
                <img className={cx("avatar")} src={account.avatar} alt="" />
                <span className={cx("account-name")}>
                  {account.accountName}
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
                <img className={cx("icon-sub-menu")} src={item.icon} alt="" />
                <span className={cx("content-sub-menu")}>{item.content}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={cx("log-out")}>
          <Link to={linkPage.signUp} className={cx("log-out-now")}>Đăng xuất khỏi Netflix</Link>
        </div>
      </div>
    </div>
  );
}

export default SubMenu;
