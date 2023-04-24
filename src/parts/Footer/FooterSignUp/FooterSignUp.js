import classNames from "classnames/bind";
import styles from "./FooterSignUp.module.scss"
const cx=classNames.bind(styles)
function FooterSignUp(){
    return (<footer className={cx("wrapper-footer-login")}>
        FooterSignUp
    </footer>)
}
export default FooterSignUp