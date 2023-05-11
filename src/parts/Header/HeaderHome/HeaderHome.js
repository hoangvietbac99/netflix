import { Fragment, useEffect, useState } from "react";
import styles from "./HeaderHome.module.scss";
import classNames from "classnames/bind";
import NavFilter from "./NavFilter/NavFilter";
import Category from "./NavCategory/Category";
import HeaderMain from "./HeaderMain/HeaderMain";
const cx = classNames.bind(styles);

function Header({ subNav, children, onClick }) {
    const [nav, setNav] = useState(false);
    useEffect(() => {
        const hide = () => {
            if (subNav === false || subNav === true) {
                const main = document.getElementsByClassName(
                    cx("wrapper-menu")
                );
                if (window.scrollY >= 10) {
                    main[0].classList.add(cx("trans"));
                } else if (window.scrollY >= -100) {
                    main[0].classList.remove(cx("trans"));
                }
            }
        };
        const changeNavbarColor = () => {
            if (window.scrollY >= 10) {
                setNav(true);
            } else {
                setNav(false);
            }
        };
        window.addEventListener("scroll", hide);
        window.addEventListener("scroll", changeNavbarColor);
        return () => {
            window.removeEventListener("scroll", hide);
            window.removeEventListener("scroll", changeNavbarColor);
        };
    }, [subNav]);
    return (
        <Fragment>
            <header className={cx("wrapper-menu", nav && "black-nav")}>
                <HeaderMain />
                {subNav === true && (
                    <div className={cx("menu-bottom")}>
                        <Category onClick={onClick} />
                    </div>
                )}
                {subNav === false && (
                    <div className={cx("menu-bottom")}>
                        <NavFilter />
                    </div>
                )}
            </header>
            <div className={cx("wrapper-page")}>{children}</div>
        </Fragment>
    );
}

export default Header;
