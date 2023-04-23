import classNames from "classnames/bind";
import styles from "./HeaderLogIn.module.scss"
import logo from "../../../assets/images/logo/index"
import { Link } from "react-router-dom";
import linkPage from "~/component/LinkPage/LinkPage";
const cx=classNames.bind(styles)

function HeaderLogIn(){
    return (
        <header className={cx("wrapper-header-login")}>
            <img src={logo.netflix} alt="" className={cx("logo-netflix")} />
            <div className={cx("menu-right")}>
                <select className={cx("wrapper-language")}>
                    Tiếng Việt
                    <option className={cx("language-item")}>Tiếng Việt</option>
                    <option className={cx("language-item")}>EngLish</option>
                </select>
                <button className={cx("btn-sign-in")}>
                    <Link to={linkPage.homeScreen} className={cx("link-sign")}>
                        <span>Sign In</span>
                    </Link>
                </button>
            </div>
        </header>
    )
}
export default HeaderLogIn;