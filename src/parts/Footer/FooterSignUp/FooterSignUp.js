import classNames from "classnames/bind";
import styles from "./FooterSignUp.module.scss"
import { Link } from "react-router-dom";
const cx=classNames.bind(styles)
const footerList=[
    {
        title:"Câu hỏi thường gặp",
        to: "/"
    },{
        title:"Trung tâm đa phương tiện",
        to: "/"
    },{
        title:"Các cách xem",
        to: "/"
    },{
        title:"Tùy chọn cookie",
        to: "/"
    },{
        title:"Kiểm tra tốc độ",
        to: "/"
    },{
        title:"Trung tâm trợ giúp",
        to: "/"
    },{
        title:"Quan hệ với nhà đầu tư",
        to: "/"
    },{
        title:"Điều khoản sử dụng",
        to: "/"
    },{
        title:"Thông tin doanh nghiệp",
        to: "/"
    },{
        title:"Thôn báo pháp lý",
        to: "/"
    },{
        title:"Tài khoản",
        to: "/"
    },{
        title:"Việc làm",
        to: "/"
    },{
        title:"Quyền riêng tư",
        to: "/"
    },{
        title:"Liên hệ với chúng tôi",
        to: "/"
    },{
        title:"Chỉ có trên Netflix",
        to: "/"
    },
]
function FooterSignUp(){
    return (
    <footer className={cx("wrapper-footer-sign-up")}>
        <div className={cx("wrapper-footer")}>
            <Link className={cx("question-contact")} to="/">Bạn có câu hỏi? liên hệ với chúng tôi</Link>
            <ul className={cx("footer-list")}>
                {footerList.map((item, index)=>(
                    <li key={index} className={cx("item-footer")}>
                        <Link className={cx("item")} to={item.to}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <span>Netflix Việt Nam</span>
        </div>
    </footer>)
}
export default FooterSignUp