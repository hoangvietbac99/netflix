import Notification from "~/component/Notification/Notification";
import SubMenu from "~/component/SubMenu/SubMenu";
import SearchInput from "~/component/SearchInput/SearchInput";
import { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import icons from "~/assets/svg/icons";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import avatar from "~/assets/images/avatarAccounts";
import logo from "~/assets/images/logo/index.js";
import Category from "~/component/SubNav/Category/Category";
import { Link } from "react-router-dom";
import NavFilter from "~/component/SubNav/NavFilter/NavFilter";
import linkPage from "~/component/LinkPage/LinkPage";
const cx = classNames.bind(styles);
const tabNav = [
  {
    title: "Trang chủ",
    to:"/"
  },
  {
    title: "Phim T.Hình",
    to: linkPage.tvShow
  },
  {
    title: "Phim",
    to:linkPage.moviePage
  },
  {
    title: "Mới & Phổ biến",
    to:linkPage.newMovie
  },
  {
    title: "Danh sách của tôi",
    to:linkPage.myList
  },
  {
    title: "Duyệt tìm theo ngôn ngữ",
    to:linkPage.filterMovie
  },
];

function Header({subNav, children, onClick}) {
  const [nav, setNav] = useState(false);

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

      if (window.scrollY >= 10) {
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
    <Fragment>
    <header className={cx("wrapper-menu", nav && "black-nav")}>
      <div className={cx("menu-main")}>
        {/* menu left */}
        <div className={cx("menu-left")}>
          <Link to="/">
            <img className={cx("logo")} src={logo.netflix} alt="" />
          </Link>
          <ul className={cx("table-nav")}>
          {tabNav.map((tab, index) => (
              <li key={index} className={cx("tab-nav")}>
                <Link to={tab.to} className={cx("tab-item")} >
                  {tab.title}
                </Link>
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
      </div>
      {subNav ===true && <div className={cx("menu-bottom")}>
        <Category onClick={onClick} />
      </div>}
      {subNav === false && <div className={cx("menu-bottom")}>
        <NavFilter />
      </div>}
    </header>
    <div className={cx("wrapper-page")} >{children}</div>
    </Fragment>
  );
}

export default Header;
