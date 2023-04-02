import Notification from "~/component/Notification/Notification";
import SubMenu from "~/component/SubMenu/SubMenu";
import SearchInput from "~/component/SearchInput/SearchInput";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import icons from "~/assets/svg/icons";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import avatar from "~/assets/images/avatarAccounts";
import logo from "~/assets/images/logo/index.js";
const cx = classNames.bind(styles);
const tabNav = [
  {
    title: "Trang chủ",
  },
  {
    title: "Phim T.Hình",
  },
  {
    title: "Phim",
  },
  {
    title: "Danh sách của tôi",
  },
  {
    title: "Duyệt tìm theo ngôn ngữ",
  },
];
function Header() {
  const [nav, setNav] = useState(false);
  ////// render//////
  const renderNotification = (attrs) => (
    <div tabIndex="-1" {...attrs}>
      <Notification />
    </div>
  );
  const renderMenu = (attrs) => (
    <div tabIndex="-1" {...attrs}>
      <SubMenu />
    </div>
  );

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
          <img className={cx("logo")} src={logo.netflix} alt="" />
        </a>
        <ul className={cx("table-nav")}>
          {tabNav.map((tab, index) => (
            <li key={index} className={cx("tab-nav")}>
              {tab.title}
            </li>
          ))}
        </ul>
      </div>
      {/* menu right */}
      <nav className={cx("menu-right")}>
        <div className={cx("search")}>
          <SearchInput />
        </div>
        {/* Notification */}
        <Tippy
          // visible
          interactive="false"
          delay={[100, 100]}
          placement="bottom-end"
          render={renderNotification}
        >
          <div className={cx("icon-bell")}>
            <img src={icons.iconBell} alt="" />
          </div>
        </Tippy>
        {/* Sub Menu */}
        <div className={cx("wrapper-show-menu")}>
          <Tippy
            // visible
            interactive="false"
            delay={[100, 100]}
            placement="bottom-end"
            render={renderMenu}
          >
            <div className={cx("account")}>
              <img className={cx("avatar")} src={avatar.avatarBlue} alt="" />
              <FontAwesomeIcon className={cx("icon-up")} icon={faCaretUp} />
            </div>
          </Tippy>
        </div>
      </nav>
    </header>
  );
}

export default Header;
