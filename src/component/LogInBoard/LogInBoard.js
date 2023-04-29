import classNames from "classnames/bind";
import styles from "./LogInBoard.module.scss"
import { useState } from "react";
import { Link } from "react-router-dom";
import linkPage from "~/pages/LinkPage/linkPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const cx=classNames.bind(styles)

function LogInBoard (){
    const [valid, setValid] = useState(false)
    const [password, setPassword] = useState (false)
    const [eye, showEye] = useState(true)
    const [type,setType] = useState("password")
    const [remember, setRemember] = useState(true)
    const [span, setSpan] = useState (true)
    const handleValue =(e)=>{
        let a = e.target.value
        let validEmail = /\S+@\S+\.\S+/.test(a)
        if(validEmail === false){
            setValid(true)
        }else{
            setValid(false)
        }
    }
    const handlePW = (e)=> {
        let p = e.target.value.length
        if(p <= 6){
            setPassword(true)
        }else{
            setPassword(false)
        }
    }
    const handleShowPW =()=> {
        showEye(!eye)
        if(eye===true){
            setType("text")
        }else{
            setType("password")
        }
    }
    const handleRMB=()=>{
        setRemember(!remember)
    }
    const handleShowSpan =()=>{
        setSpan(!span)
    }
    return(
        <div className={cx("wrapper-log-in-board")}>
            <h1>Đăng nhập</h1>
            <div className={cx("input-email")}>
                <input className={cx(valid &&"is-valid")} required onBlur={(e)=>handleValue(e)} type="text"/>
                <label className={cx("title")}>Email hoặc số điện thoại</label>
                {valid && <div className={cx("text-valid")}>Vui lòng nhập Email hoặc số điện thoại hợp lệ</div>}
            </div>
            <div className={cx("input-password")}>
                <input className={cx(password &&"is-valid")} required onBlur={(e)=> handlePW(e)} type={type}/>
                <button className={cx("show-pw")} onClick={()=>handleShowPW()}>
                    <FontAwesomeIcon icon={eye === true ? faEyeSlash: faEye}/>
                </button>
                <label className={cx("title")}>Mật khẩu</label>
                {password && <div className={cx("text-valid")}>Mật khẩu phải chứa tối thiểu 6 ký tự</div>}
            </div>
            <div className={cx("complete")}>
                <button>
                    <Link className={cx("link-")} to={linkPage.home}>
                        Đăng nhập
                    </Link>
                </button>
            </div>
            <div className={cx("remember-help")}>
                <div className={cx("remember")}>
                    <button onClick={()=>handleRMB()}>{remember &&<FontAwesomeIcon icon={faCheck}/>}</button>
                    <span>Ghi nhớ đăng nhập</span>
                </div>
                <div className={cx("help")}>
                    <Link className={cx("link")} to={linkPage.signUp}>
                        Bạn cẩn trợ giúp?
                    </Link>
                </div>
            </div>
            <div className={cx("register")}>
                Bạn mới tham gia Netflix?
                <Link className={cx("link-")} to={linkPage.signUp}>Đăng ký ngay.</Link>
                <div className={cx("info-")}>
                    <p>Trang này được Google reCAPTCHA bảo vệ để đảm bảo bạn không phải là robot.<button className={cx("more",span===false? "show":undefined)} onClick={()=>handleShowSpan()}>Tìm hiểu thêm</button></p>
                    <span className={span === true ? cx("show"):undefined} >Thông tin do Google reCAPTCHA thu thập sẽ tuân theo 
                        <a target = "_ blank" href="https://policies.google.com/privacy">Chính sách Quyền riêng tư</a> 
                            và 
                        <a target = "_ blank" href="https://policies.google.com/terms">Điều khoản dịch vụ của Google</a>
                            , được dùng để cung cấp, duy trì và cải thiện dịch vụ reCAPTCHA cũng như các mục đích bảo mật nói chung (thông tin này không được dùng để cá nhân hóa quảng cáo của Google).
                        </span>
                </div>
            </div>
        </div>
    )
}
export default LogInBoard