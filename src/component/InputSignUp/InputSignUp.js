import classNames from "classnames/bind";
import styles from "./InputSignUp.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {  useState } from "react";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import linkPage from "~/pages/LinkPage/linkPage";
const cx =classNames.bind(styles)
function InputSignUp(){
    const [valid, setValid] = useState(false)
    const handleValue =(e)=>{
        let a = e.target.value
        let validEmail = /\S+@\S+\.\S+/.test(a)
        if(validEmail === false){
            setValid(true)
        }else{
            setValid(false)
        }
    }
    return (
        <div className={cx("wrapper-input-sign-up")}>
            
            <div className={cx("wrapper-input")}>
                <input type="text" className={cx( valid && "is-valid")} required placeholder="" onBlur={e=>handleValue(e)} />
                <label className={cx("label")}>Địa chỉ Email ...</label>
                <button className={cx("btn-get")}>
                    <Link className={cx("link-")} to={linkPage.signIn}>
                        Get Started
                        <FontAwesomeIcon className={cx("icon-arrow-right")} icon={faChevronRight}/>
                    </Link>
                </button>
                <span style={valid === true ? {display : "block"} : {display: "none" }}>
                    <FontAwesomeIcon className={cx("icon-xmark")} icon={faCircleXmark} />
                    Bạn cần nhập Email
                </span>
            </div>

        </div>
    )
}
export default InputSignUp