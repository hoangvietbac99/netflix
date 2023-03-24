import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/images/index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import MenuFilms from "~/component/MenuFilms/MenuFilms";
import MenuItems from "~/component/SubMenuAccount/SubMenuAccount";
import InputSearch from "~/component/InputSearch/InputSearch";
const cx = classNames.bind(styles);
function Header() {
  const [nav, setNav] = useState(false);

  ///////////////////
  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 100) {
        setNav(true);
      } else {
        setNav(false);
      }
    };
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);
  return (
    <header className={cx("menu-main", nav && "black-nav")}>
      {/* menu left */}
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
      {/* menu right */}
      <div className={cx("menu-right")}>
        <div className={cx("search")}>
          <InputSearch />
        </div>
        <div className={cx("notification")}>
          <FontAwesomeIcon className={cx("icon-nav-main")} icon={faBell} />
          {false && <MenuFilms />}
        </div>
        <div className={cx("account")}>
          <img className={cx("avatar")} src={images.avatarBlue} alt="" />
          <FontAwesomeIcon className={cx("icon-up")} icon={faCaretUp} />
          {false && <MenuItems />}
        </div>
      </div>
    </header>
  );
}

export default Header;
