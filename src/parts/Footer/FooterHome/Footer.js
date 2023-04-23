import classNames from "classnames/bind"
import styles from "./Footer.module.scss"
import icons from "~/assets/svg/icons";
const cx =classNames.bind(styles)
const members =[
    {
        title:"Mô tả âm thanh"
    },
    {
        title:"Trung tâm trợ giúp"
    },{
        title:"Thẻ quà tặng"
    },{
        title:"Trung tâm đa phương tiện"
    },{
        title:"Quan hệ với nhà đầu tư"
    },{
        title:"Việc làm"
    },{
        title:"Điều khoản sử dụng"
    },{
        title:"Quyền riêng tư"
    },{
        title:"Thông báo pháp lý"
    },{
        title:"Tùy chọn Cookie"
    },{
        title:"Thông tin doanh nghiệp"
    },{
        title:"Liên hệ với chúng tôi"
    }
]

function Footer(){
    const handleService = ()=> {
        document.getElementById("service").innerHTML="077-257"
    }
    return (
    <footer className={cx("wrapper-footer")}>
        <div className={cx("footer")}>
            <div className={cx("social-network")}>
                <a className={cx("icon-social")} href="/">
                    <img src={icons.iconFB} alt="" />
                </a>
                <a className={cx("icon-social")} href="/">
                    <img src={icons.iconIG} alt="" />
                </a>
                <a className={cx("icon-social")} href="/">
                    <img src={icons.iconTW} alt="" />
                </a>
                <a className={cx("icon-social")} href="/">
                    <img src={icons.iconYT} alt="" />
                </a>
            </div>
            <ul className={cx("member-footer")}>
                {members.map((member, index)=>(
                    <li className={cx("item-member-footer")} key={index}>{member.title}</li>
                ))}
            </ul>
            <div className={cx("service-footer")}>
                <button onClick={()=>handleService()} id="service">
                    Mã dịch vụ
                </button>
            </div>
            <div className={cx("coppyright-footer")}>
                <span>© 1997-2023 Netflix, Inc., Clone by hv_bac99</span>
            </div>
        </div>
    </footer>)
}
export default Footer;