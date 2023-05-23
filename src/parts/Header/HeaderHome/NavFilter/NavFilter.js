import classNames from "classnames/bind";
import styles from "./NavFilter.module.scss";
import Menu from "~/component/Dropdown/Dropdown";

const cx = classNames.bind(styles);
const translate = [
    {
        title: "Ngôn ngữ gốc",
    },
    {
        title: "Lồng tiếng",
    },
    {
        title: "Phụ đề",
    },
];
const langguage = [
    {
        title: "Tiếng Ả Rập",
    },
    {
        title: "Tiếng Anh",
    },
    {
        title: "Tiếng Ba Lan",
    },
    {
        title: "Tiếng Bồ Đào Nha",
    },
    {
        title: "Tiếng Đan Mạch",
    },
    {
        title: "Tiếng Đức",
    },
    {
        title: "Tiếng Hà Lan",
    },
    {
        title: "Tiếng Hàn Quốc",
    },
    {
        title: "Tiếng Indonesia",
    },
    {
        title: "Tiếng Nhật Bản",
    },
    {
        title: "Tiếng Tây Ban Nha",
    },
    {
        title: "Tiếng Thụy Điển",
    },
];
const ordinal = [
    {
        title: "Đề xuất dành cho bạn",
    },
    {
        title: "Năm phát hành",
    },
    {
        title: "A-Z",
    },
    {
        title: "Z-A",
    },
];
function NavFilter() {
    return (
        <nav className={cx("wrappper-nav-filter")}>
            <h2 className={cx("genre-title")}> Duyệt tìm theo ngôn ngữ</h2>
            <div className={cx("wrapper-option-right")}>
                <div className={cx("sub-option")}>
                    <span className={cx("font-title")}>Điều chỉnh của bạn</span>
                    <Menu title={"Ngôn ngữ gốc"} listItem={translate} />
                </div>
                <div className={cx("language-option")}>
                    <Menu title={"Tiếng Anh"} listItem={langguage} />
                </div>
                <div className={cx("for-you-option")}>
                    <span className={cx("font-title")}>Sắp xếp theo</span>
                    <Menu title={"Để xuất dành cho bạn"} listItem={ordinal} />
                </div>
            </div>
        </nav>
    );
}
export default NavFilter;
