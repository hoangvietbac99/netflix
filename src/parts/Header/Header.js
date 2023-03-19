import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/images/index.js";
const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx("menu-main")}>
      <a className={cx("logo")} href="/">
        <img src={images.logo} alt="" />
      </a>
      <ul className={cx("table_nav")}>
        <li className={cx("tab_nav")}>Trang chủ</li>
        <li className={cx("tab_nav")}>Phim T.Hình</li>
        <li className={cx("tab_nav")}>Phim</li>
        <li className={cx("tab_nav")}>Mới & Phổ biến</li>
        <li className={cx("tab_nav")}>Danh sách của tôi</li>
        <li className={cx("tab_nav")}>Duyệt tìm theo ngôn ngữ</li>
      </ul>
    </header>
  );
}

export default Header;
