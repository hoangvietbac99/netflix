import classNames from "classnames/bind";
import styles from "./SignUpScreen.module.scss"
import HeaderSignUp from "~/parts/Header/HeaderSignUp/HeaderSignUp";
import FooterSignUp from "~/parts/Footer/FooterSignUp/FooterSignUp";
const cx=classNames.bind(styles)
function SignUpScreen ({children}){
    return (<div className={cx("wrapper-login-screen")}>
        <HeaderSignUp/>
        {children}
        <FooterSignUp />
    </div>)
}

export default SignUpScreen