import classNames from "classnames/bind";
import styles from "./Category.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import icons from "~/assets/svg/icons";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);
const categorys = [
    {
        title: "Anh",
        link: "/",
    },
    {
        title: "Anime",
        link: "/",
    },
    {
        title: "Châu Á",
        link: "/",
    },
    {
        title: "Châu Âu",
        link: "/",
    },
    {
        title: "Hài",
        link: "/",
    },
    {
        title: "Hành động",
        link: "/",
    },
    {
        title: "Khoa học & thiên nhiên",
        link: "/",
    },
    {
        title: "Khoa học viễn tưởng & giả tưởng",
        link: "/",
    },
    {
        title: "kinh dị",
        link: "/",
    },
    {
        title: "Lãng mạn",
        link: "/",
    },
    {
        title: "Loạt phim tài liệu",
        link: "/",
    },
    {
        title: "Mỹ",
        link: "/",
    },
    {
        title: "Ngày trái đất",
        link: "/",
    },
    {
        title: "Phim chính kịch",
        link: "/",
    },
    {
        title: "Phim chính kịch Hàn Quốc",
        link: "/",
    },
    {
        title: "Phim giật gân",
        link: "/",
    },
    {
        title: "Tội phạm",
        link: "/",
    },
    {
        title: "Trẻ em",
        link: "/",
    },
    {
        title: "Truyền hình thực tế & tọa đàm",
        link: "/",
    },
    {
        title: "Tuổi teen",
        link: "/",
    },
];
function Category({ onClick }) {
    const [showIcon, setShowIcon] = useState(true);
    const [r, setR] = useState(false);
    const handleRotate = () => {
        setR(!r);
    };
    const handleShowIcon = () => {
        setShowIcon(!showIcon);
    };
    useEffect(() => {
        const clickLink = document.getElementsByClassName(cx("item-category"));
        const hide = document.getElementById("show-2");
        for (let i = 0; i < clickLink.length; i++) {
            clickLink[i].addEventListener("click", function () {
                hide.checked = false;
            });
        }
    }, []);
    return (
        <div className={cx("wrapper-category")}>
            <div className={cx("genre-left")}>
                <h2 className={cx("genre-title")}>Thể loại phim</h2>
                <div className={cx("category")}>
                    <label
                        htmlFor="show-2"
                        className={cx("btn-toggle")}
                        onClick={() => handleRotate()}
                    >
                        <span>Thể loại</span>
                        <FontAwesomeIcon
                            className={cx("icon-category", r && "rotate-icon")}
                            icon={faCaretUp}
                        />
                    </label>
                    <input
                        type="checkbox"
                        className={cx("show-2")}
                        id="show-2"
                    />
                    <div className={cx("list-category")}>
                        <ul className={cx("list-category-conlumn")}>
                            {categorys.map((category, index) => (
                                <li className={cx("item")} key={index}>
                                    <Link
                                        className={cx("item-category")}
                                        to="/tv-show"
                                    >
                                        {category.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={cx("genre-right")}>
                <div className={cx("icon")} onClick={() => onClick("type")}>
                    <button
                        className={cx("icon-bar")}
                        onClick={() => handleShowIcon()}
                    >
                        {showIcon === true ? (
                            <img
                                className={cx("icon-")}
                                src={icons.iconBars}
                                alt=""
                            />
                        ) : (
                            <img
                                className={cx("icon-")}
                                src={icons.iconTable}
                                alt=""
                            />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Category;
