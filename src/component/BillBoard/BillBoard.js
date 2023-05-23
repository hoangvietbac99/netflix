import classNames from "classnames/bind";
import styles from "./BillBoard.module.scss";
import icons from "~/assets/svg/icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import linkPage from "~/pages/LinkPage/linkPage";
const cx = classNames.bind(styles);
function BillBoard({ onClick }) {
    const [items, setItems] = useState([]);
    const handleBillbroad = () => {
        onClick(items.id);
    };
    useEffect(() => {
        const fetchMoviesData = () => {
            fetch("http://localhost:3001/movies")
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    let rand = data[Math.floor(Math.random() * data.length)];
                    return setItems(rand);
                });
        };
        fetchMoviesData();
    }, []);

    return (
        <div className={cx("wrapper-bill-board")}>
            <div className={cx("wrapper-banner")}>
                <video
                    className={cx("poster")}
                    autoPlay
                    loop
                    poster={items.poster}
                    src={items.trailer}
                ></video>
                <div className={cx("info-poster")}>
                    <div className={cx("content")}>
                        <img
                            className={cx("title-logo")}
                            src={items.title}
                            alt=""
                        />
                        <div className={cx("description")}>{items.content}</div>
                    </div>
                    <div className={cx("play-info")}>
                        <Link
                            className={cx("link-")}
                            to={linkPage.watchMovie}
                            onClick={() => handleBillbroad()}
                        >
                            <button className={cx("play-video")}>
                                <img
                                    className={cx("icon-play")}
                                    src={icons.iconPlay}
                                    alt=""
                                />
                                <span className={cx("title-play")}>Phát</span>
                            </button>
                        </Link>
                        <button
                            className={cx("information")}
                            onClick={() => handleBillbroad()}
                        >
                            <img
                                className={cx("icon-info")}
                                src={icons.iconInfo}
                                alt=""
                            />
                            <span className={cx("title-info")}>
                                Thông tin khác
                            </span>
                        </button>
                    </div>
                </div>
                <div className={cx("sound-rating")}>
                    <div className={cx("rating")}>
                        <span className={cx("age")}>{items.rate}</span>
                    </div>
                </div>
                <div className={cx("shadow")}></div>
            </div>
        </div>
    );
}
export default BillBoard;
