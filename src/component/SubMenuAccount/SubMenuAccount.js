import classNames from "classnames/bind";
import styles from "./SubMenuAccount.module.scss";
import images from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faCaretUp,
  faCircleQuestion,
  faPenSquare,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
const accounts = [
  {
    avatar: images.avatarBlue,
    accountName: "Hoàng Việt Bắc",
  },
  {
    avatar: images.avatarRed,
    accountName: "Hoàng Đức Giang",
  },
  {
    avatar: images.avatarGreen,
    accountName: "Hoàng Anh Lập",
  },
  {
    avatar: images.avatarYellow,
    accountName: "Phạm Thanh Huyền",
  },
];
function MenuItems() {
  return (
    <div>
      <FontAwesomeIcon className={cx("call-out")} icon={faCaretUp} />
      <div className={cx("menu-account")}>
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
            <li className={cx("sub-menu-item")}>
              <FontAwesomeIcon
                className={cx("icon-sub-menu")}
                icon={faPenSquare}
              />
              <span className={cx("content-sub-menu")}>Quản lý hồ sơ</span>
            </li>
            <li className={cx("sub-menu-item")}>
              <FontAwesomeIcon
                className={cx("icon-sub-menu")}
                icon={faArrowAltCircleLeft}
              />
              <span className={cx("content-sub-menu")}>Chuyển hồ sơ</span>
            </li>
            <li className={cx("sub-menu-item")}>
              <FontAwesomeIcon className={cx("icon-sub-menu")} icon={faUser} />
              <span className={cx("content-sub-menu")}>Tài khoản</span>
            </li>
            <li className={cx("sub-menu-item")}>
              <FontAwesomeIcon
                className={cx("icon-sub-menu")}
                icon={faCircleQuestion}
              />
              <span className={cx("content-sub-menu")}>Trung tâm trợ giúp</span>
            </li>
          </ul>
        </div>
        <div className={cx("log-out")}>
          <span className={cx("log-out-now")}>dang xuat khoi netflix</span>
        </div>
      </div>
    </div>
  );
}

export default MenuItems;
