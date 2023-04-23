import classNames from "classnames/bind";
import styles from "./LogIn.module.scss"
const cx=classNames.bind(styles)
function LogIn(){
    return (<div className={cx("log-in")}>
        <h1>Log In</h1>
    </div>)
}

export default LogIn