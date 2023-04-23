import classNames from "classnames/bind";
import styles from "./LogInScreen.module.scss"
import HeaderLogIn from "~/parts/Header/HeaderLogIn/HeaderLogIn";
import FooterLogIn from "~/parts/Footer/FooterLogIn/FooterLogIn";
const cx=classNames.bind(styles)
function LogInScreen ({children}){
    return (<div className={cx("wrapper-login-screen")}>
        <HeaderLogIn/>
        {children}
        <FooterLogIn />
    </div>)
}

export default LogInScreen