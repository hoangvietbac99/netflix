import styles from "./HeaderMain.module.scss";
import classNames from "classnames/bind";
import Notification from "~/component/Notification/Notification";
import SubMenu from "~/component/SubMenu/SubMenu";
import logo from "~/assets/images/logo/index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faCaretUp,
    faFilm,
    faHouse,
    faLanguage,
    faList,
    faNewspaper,
    faVideo,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import icons from "~/assets/svg/icons";
import { Link } from "react-router-dom";
import linkPage from "~/pages/LinkPage/linkPage";
import { Fragment, useEffect, useState } from "react";
import Search from "~/component/Search/Search";
const cx = classNames.bind(styles);
const tabNav = [
    {
        title: "Trang chủ",
        to: linkPage.home,
        icon: faHouse,
    },
    {
        title: "Phim T.Hình",
        to: linkPage.tvShow,
        icon: faVideo,
    },
    {
        title: "Phim",
        to: linkPage.moviePage,
        icon: faFilm,
    },
    {
        title: "Mới và Phổ biến",
        to: linkPage.newMovie,
        icon: faNewspaper,
    },
    {
        title: "Danh sách của tôi",
        to: linkPage.myList,
        icon: faList,
    },
    {
        title: "Duyệt theo ngôn ngữ",
        to: linkPage.filterMovie,
        icon: faLanguage,
    },
];
function HeaderMain({ onClick }) {
    const [addressPage, setAddressPage] = useState();
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
    const renderNavMobie = (attrs) => (
        <div tabIndex="-1" {...attrs}>
            <div className={cx("wrapper-nav-mobie")}>
                <ul className={cx("container")}>
                    {tabNav.map((item, index) => (
                        <li key={index} className={cx("item")}>
                            <Link className={cx("link")} to={item.to}>
                                <FontAwesomeIcon
                                    className={cx("icon")}
                                    icon={item.icon}
                                />
                                <span className={cx("title")}>
                                    {item.title}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

    useEffect(() => {
        const remove = document.getElementsByClassName(cx("active"));
        const activeURL = document.URL.slice(21); // baseurl
        //active link page
        const titlePage = document.getElementsByClassName(cx("nav-item"));
        for (var i = 0; i < titlePage.length; i++) {
            titlePage[i].addEventListener("click", function () {
                remove[0].classList.remove(cx("active"));
                this.classList.add(cx("active"));
            });
        }
        // handle nav reload
        const setActiveURL = () => {
            for (let i = 0; i < titlePage.length; i++) {
                let links = titlePage[i].attributes.href.value;
                if (links === activeURL) {
                    titlePage[i].classList.add(cx("active"));
                }
            }
        };
        window.onload = setActiveURL();
        //click logo come back home
        const logoLink = document.getElementsByClassName(cx("logo-link"));
        logoLink[0].addEventListener("click", function () {
            remove[0].classList.remove(cx("active"));
            titlePage[0].classList.add(cx("active"));
        });
    }, [addressPage]);
    /////
    const handlechange = (e) => {
        setAddressPage(e.target.value);
    };

    return (
        <Fragment>
            <div className={cx("wrapper-header-main")}>
                {/* menu left */}
                <nav className={cx("nav-left")}>
                    <Link className={cx("logo-link")} to={linkPage.home}>
                        <img
                            className={cx("logo-f")}
                            src={logo.netflix}
                            alt=""
                        />
                    </Link>
                    <Tippy
                        interactive="false"
                        delay={[100, 100]}
                        placement="left-end"
                        render={renderNavMobie}
                    >
                        <div htmlFor="show" className={cx("arrow-nav")}>
                            <FontAwesomeIcon
                                className={cx("nav-bars")}
                                icon={faBars}
                            />
                        </div>
                    </Tippy>
                    <nav className={cx("small-nav")}>
                        <div className={cx("wrapper-list")}>
                            <div className={cx("list-small-nav")}>
                                {tabNav.map((tab, index) => (
                                    <li className={cx("link-page")} key={index}>
                                        <FontAwesomeIcon
                                            className={cx("icon")}
                                            icon={tab.icon}
                                        />
                                        <Link
                                            onClick={(e) => handlechange(e)}
                                            to={tab.to}
                                            className={cx("nav-item")}
                                        >
                                            {tab.title}
                                        </Link>
                                    </li>
                                ))}
                            </div>
                        </div>
                    </nav>
                    <div className={cx("address-page")}>
                        <span>{addressPage}</span>
                    </div>
                    {/*  */}
                </nav>
                {/* menu right */}
                <nav className={cx("nav-right")}>
                    <div className={cx("search")}>
                        <Search onClick={onClick} />
                    </div>
                    <Tippy
                        // visible
                        interactive="false"
                        delay={[100, 100]}
                        placement="bottom-end"
                        render={renderNotification}
                    >
                        <div>
                            <img
                                className={cx("icon-bell")}
                                src={icons.iconBell}
                                alt=""
                            />
                        </div>
                    </Tippy>
                    {/* Sub Menu */}
                    <div className={cx("wrapper-menu-account")}>
                        <Tippy
                            interactive="false"
                            delay={[100, 100]}
                            placement="bottom-end"
                            render={renderMenu}
                        >
                            <div className={cx("account")}>
                                <img
                                    className={cx("avatar")}
                                    src="https://avatars.githubusercontent.com/u/6759280?v=4"
                                    alt=""
                                />
                                <FontAwesomeIcon
                                    className={cx("icon-up")}
                                    icon={faCaretUp}
                                />
                            </div>
                        </Tippy>
                    </div>
                </nav>
            </div>
        </Fragment>
    );
}
export default HeaderMain;
