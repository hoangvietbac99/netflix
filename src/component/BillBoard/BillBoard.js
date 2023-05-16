import classNames from "classnames/bind";
import styles from "./BillBoard.module.scss";
import icons from "~/assets/svg/icons";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);
function BillBoard({ onClick }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchUserData = () => {
            fetch("http://localhost:3001/movies")
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    let rand = data[Math.floor(Math.random() * data.length)];
                    return setItems(rand);
                });
        };
        fetchUserData();
    }, []);

    return (
        <div className={cx("wrapper-bill-board")}>
            <div className={cx("wrapper-banner")}>
                <video
                    className={cx("poster")}
                    autoPlay
                    loop
                    poster={items.poster}
                    // src={items.trailer}
                ></video>
                <div className={cx("info-poster")}>
                    <img
                        className={cx("title-logo")}
                        src={items.title}
                        alt=""
                    />
                    <div className={cx("description")}>{items.content}</div>
                    <div className={cx("play-info")}>
                        <button className={cx("play-video")}>
                            <img
                                className={cx("icon-play")}
                                src={icons.iconPlay}
                                alt=""
                            />
                            <span className={cx("title-play")}>Phát</span>
                        </button>
                        <button
                            className={cx("information")}
                            onClick={() => onClick(items.id)}
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
                    <button className={cx("circle-rotate")}>
                        <img
                            className={cx("rotate")}
                            src={icons.iconRotate}
                            alt=""
                        />
                    </button>
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
