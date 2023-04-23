import classNames from "classnames/bind";
import styles from "./FooterLogIn.module.scss"
const cx=classNames.bind(styles)
function FooterLogIn(){
    return (<footer className={cx("wrapper-footer-login")}>
        FooterLogIn
    </footer>)
}
export default FooterLogIn