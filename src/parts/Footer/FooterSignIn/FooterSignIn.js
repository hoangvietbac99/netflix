import classNames from "classnames/bind";
import styles from "./FooterSignIn.module.scss"
import { Link } from "react-router-dom";
const cx = classNames.bind(styles)
const sp = [
    {
        title:"Câu hỏi thường gặp",
        to: "https://help.netflix.com/en/node/412"
    },{
        title:"Trung tâm trợ giúp",
        to:""
    },{
        title:"Điều khoản sử dụng",
        to:"https://help.netflix.com/legal/termsofuse"
    },{
        title:"Quyền riêng tư",
        to:"https://help.netflix.com/legal/privacy"
    },{
        title:"Tùy chọn Cookie",
        to: "https://help.netflix.com/legal/privacy#cookies"
    },{
        title:"Thông tin doanh nghiệp",
        to: "https://help.netflix.com/legal/corpinfo"
    },
]
function FooterSignIn(){
    return (
        <div className={cx("wrapper-footer-sign-in")}>
            <div className={cx("wrapper-footer")}>
            <div className={cx( "ques")}><Link target="_blank" to="https://help.netflix.com/en/contactus" className={cx("link-")}>Bạn có câu hỏi? Liên hệ với chúng tôi.</Link></div>
            <div className={cx("list-sp")}>
                <ul className={cx("list")}>
                    {sp.map((item, index)=>(
                        <li key={index} className={cx("item-sp")}>
                            <Link target="_blank" className={cx("link-")} to={item.to}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <select>
                Tiếng việt
                <option>Tiếng việt</option>
                <option>EngLish</option>
            </select>
            </div>
        </div>

    )
}
export default FooterSignIn