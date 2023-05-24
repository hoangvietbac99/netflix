import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import icons from "~/assets/svg/icons";
const cx = classNames.bind(styles);
const members = [
    {
        title: "Mô tả âm thanh",
        href: "",
    },
    {
        title: "Trung tâm trợ giúp",
        href: "",
    },
    {
        title: "Thẻ quà tặng",
        href: "",
    },
    {
        title: "Trung tâm đa phương tiện",
        href: "",
    },
    {
        title: "Quan hệ với nhà đầu tư",
        href: "",
    },
    {
        title: "Việc làm",
        href: "",
    },
    {
        title: "Điều khoản sử dụng",
        href: "",
    },
    {
        title: "Quyền riêng tư",
        href: "",
    },
    {
        title: "Thông báo pháp lý",
        href: "",
    },
    {
        title: "Tùy chọn Cookie",
        href: "",
    },
    {
        title: "Thông tin doanh nghiệp",
        href: "",
    },
    {
        title: "Liên hệ với chúng tôi",
        href: "",
    },
];

function Footer() {
    const handleService = () => {
        document.getElementById("service").innerHTML = "077-257";
    };
    return (
        <footer className={cx("wrapper-footer")}>
            <div className={cx("footer")}>
                <div className={cx("social-network")}>
                    <a
                        className={cx("icon-social")}
                        target="blank"
                        href="https://www.facebook.com/NetflixVietnam/?brand_redir=892716500824351"
                    >
                        <img src={icons.iconFB} alt="" />
                    </a>
                    <a
                        className={cx("icon-social")}
                        target="blank"
                        href="https://www.instagram.com/netflixasia/"
                    >
                        <img src={icons.iconIG} alt="" />
                    </a>
                    <a
                        className={cx("icon-social")}
                        target="blank"
                        href="https://twitter.com/NetflixAsia"
                    >
                        <img src={icons.iconTW} alt="" />
                    </a>
                    <a
                        className={cx("icon-social")}
                        target="blank"
                        href="https://www.youtube.com/channel/UCZoC-XeDO7HxbAdeCaRPPCw/videos"
                    >
                        <img src={icons.iconYT} alt="" />
                    </a>
                </div>
                <ul className={cx("member-footer")}>
                    {members.map((member, index) => (
                        <li className={cx("item-member-footer")} key={index}>
                            <a className={cx("link-")} href={member.href}>
                                {member.title}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className={cx("service-footer")}>
                    <button onClick={() => handleService()} id="service">
                        Mã dịch vụ
                    </button>
                </div>
                <div className={cx("coppyright-footer")}>
                    <span>© 1997-2023 Netflix, Inc., Clone by hv_bac99</span>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
