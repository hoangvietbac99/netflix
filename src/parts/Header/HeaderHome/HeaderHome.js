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
                <div className={cx("header-top")}>
                    <HeaderMain />
                </div>
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
