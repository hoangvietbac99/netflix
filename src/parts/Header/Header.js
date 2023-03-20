import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/images/index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCaretUp, faSearch } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx("menu-main")}>
      <div className={cx("menu-left")}>
        <a href="/">
          <img className={cx("logo")} src={images.logo} alt="" />
        </a>
        <ul className={cx("table-nav")}>
          <li className={cx("tab-nav")}>Trang chủ</li>
          <li className={cx("tab-nav")}>Phim T.Hình</li>
          <li className={cx("tab-nav")}>Phim</li>
          <li className={cx("tab-nav")}>Mới & Phổ biến</li>
          <li className={cx("tab-nav")}>Danh sách của tôi</li>
          <li className={cx("tab-nav")}>Duyệt tìm theo ngôn ngữ</li>
        </ul>
      </div>

      <div className={cx("menu-right")}>
        <FontAwesomeIcon className={cx("icon-search")} icon={faSearch} />
        <FontAwesomeIcon className={cx("icon-search")} icon={faBell} />
        <div className={cx("account")}>
          <img className={cx("avatar")} src={images.avatarBlue} alt="" />
          <FontAwesomeIcon className={cx("icon-up")} icon={faCaretUp} />
        </div>
      </div>
    </header>
  );
}

export default Header;
