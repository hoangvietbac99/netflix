import classNames from "classnames/bind";
import styles from "./SignIn.module.scss"
import LogInBoard from "~/component/LogInBoard/LogInBoard";
const cx=classNames.bind(styles)
function SignIn(){
    return(
        <div className={cx("wrapper-sign-in")}>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/d9d1144a-d86f-449b-b110-641145dee09d/VN-en-20230417-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                alt=""
            />
            <div className={cx("dark-img")}>
                <LogInBoard />
            </div>
        </div>
    )
}


export default SignIn