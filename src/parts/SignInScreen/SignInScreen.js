import classNames from "classnames/bind";
import styles from "./SignInScreen.module.scss"
import logo from "~/assets/images/logo";
import { Link } from "react-router-dom";
import linkPage from "~/pages/LinkPage/LinkPage";
import FooterSignIn from "../Footer/FooterSignIn/FooterSignIn";
const cx= classNames.bind(styles)
function SignInScreen ({children}){
    return (
        <div className={cx("wrapper-sign-in-screen")}>
            <Link to={linkPage.signUp} >
                <img className={cx("logo")} src={logo.netflix} alt="" />
            </Link>
            {children}
            <FooterSignIn />
        </div>
    )
}
export default SignInScreen