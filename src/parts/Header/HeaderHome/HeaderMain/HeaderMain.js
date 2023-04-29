import styles from "./HeaderMain.module.scss";
import classNames from "classnames/bind";
import Notification from "~/component/Notification/Notification";
import SubMenu from "~/component/SubMenu/SubMenu";
// import SearchInput from "~/component/SearchInput/SearchInput";
import avatar from "~/assets/images/avatarAccounts";
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
    faSearch,
    faTimes,
    faVideo,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import icons from "~/assets/svg/icons";
import { Link } from "react-router-dom";
import linkPage from "~/pages/LinkPage/linkPage";
import { useEffect, useRef, useState } from "react";
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
function HeaderMain() {
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
    const [addressPage, setAddressPage] = useState();
    const [valueInput, setValueInput] = useState("");

    useEffect(() => {
        const remove = document.getElementsByClassName(cx("active"));
        const activeURL = document.URL.slice(21); // baseurl
        //mobie
        const titlePage = document.getElementsByClassName(cx("nav-item"));
        const small = document.getElementById("show");
        for (let i = 0; i < titlePage.length; i++) {
            const linkSmall = titlePage[i].attributes.href.value;
            titlePage[i].addEventListener("click", function () {
                small.checked = false;
            });
            const address = titlePage[i].innerHTML;
            if (linkSmall === activeURL) {
                setAddressPage(address);
            }
        }
        //active link page
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
    const inputRef = useRef();
    const handleClick = () => {
        inputRef.current.focus();
    };
    /////
    const handlechange = (e) => {
        setAddressPage(e.target.value);
    };
    const handleChangeIP = (e) => {
        const value = e.target.value;
        setValueInput(value);
    };
    return (
        <div className={cx("wrapper-header-main")}>
            {/* menu left */}
            <nav className={cx("nav-left")}>
                <Link className={cx("logo-link")} to={linkPage.home}>
                    <img className={cx("logo-f")} src={logo.netflix} alt="" />
                </Link>
                <label htmlFor="show" className={cx("arrow-nav")}>
                    <FontAwesomeIcon className={cx("nav-bars")} icon={faBars} />
                </label>
                <input
                    type="checkbox"
                    className={cx("show-mobie-nav")}
                    id="show"
                />
                <label htmlFor="show" className={cx("layout-overlay")}></label>
                <nav className={cx("small-nav")}>
                    <div className={cx("exit")}>
                        <label htmlFor="show">
                            <FontAwesomeIcon
                                className={cx("icon")}
                                icon={faTimes}
                            />
                        </label>
                        <div className={cx("logo-small-nav")}>
                            <img
                                className={cx("logo")}
                                src={logo.netflix}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className={cx("search-small-nav")}>
                        <input
                            className={cx("show-3")}
                            type="checkbox"
                            id="show-3"
                        />
                        <div className={cx("container")}>
                            <input
                                ref={inputRef}
                                className={cx("input-search")}
                                placeholder="Tìm kiếm"
                                value={valueInput}
                                onChange={(e) => handleChangeIP(e)}
                            />
                            <label
                                onClick={handleClick}
                                className={cx("show-search")}
                                htmlFor="show-3"
                            >
                                <FontAwesomeIcon
                                    className={cx("icon-search")}
                                    icon={faSearch}
                                />
                            </label>
                        </div>
                    </div>
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
                                src={avatar.avatarBlue}
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
    );
}
export default HeaderMain;
