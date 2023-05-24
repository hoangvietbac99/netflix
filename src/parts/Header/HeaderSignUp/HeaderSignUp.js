import classNames from "classnames/bind";
import styles from "./HeaderSignUp.module.scss";
import logo from "../../../assets/images/logo/index";
import { Link } from "react-router-dom";
import linkPage from "~/pages/LinkPage/linkPage";
const cx = classNames.bind(styles);

function HeaderSignUp() {
    return (
        <header className={cx("wrapper-header-sign-up")}>
            <img src={logo.netflix} alt="" className={cx("logo-netflix")} />
            <div className={cx("menu-right")}>
                <select className={cx("wrapper-language")}>
                    Tiếng Việt
                    <option lang="vi" className={cx("language-item")}>
                        Tiếng Việt
                    </option>
                    <option lang="en" className={cx("language-item")}>
                        EngLish
                    </option>
                </select>
                <button className={cx("btn-sign-in")}>
                    <Link to={linkPage.signIn} className={cx("link-sign")}>
                        <span>Đăng nhập</span>
                    </Link>
                </button>
            </div>
        </header>
    );
}
export default HeaderSignUp;
