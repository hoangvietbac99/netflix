import classNames from "classnames/bind";
import styles from "./SmallTrailer.module.scss";
import icons from "~/assets/svg/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function SmallTrailer({ data }) {
    const nature = data.nature.split(",");
    const getData = (id) => {
        console.log(id);
    };
    return (
        <>
            <div className={cx("wrapper-trailer-item")}>
                <div className={cx("player")}>
                    <video
                        autoPlay
                        className={cx("pic-vi")}
                        poster={data.picture}
                        // src={data.trailer}
                    />
                </div>
                <div className={cx("player-info")}>
                    <div className={cx("btn-direc")}>
                        <div className={cx("btn-left")}>
                            <button className={cx("btn-circle", "-play")}>
                                <img
                                    className={cx("icon-l")}
                                    src={icons.iconPlay}
                                    alt=""
                                />
                            </button>
                            <button className={cx("btn-circle")}>
                                <img
                                    className={cx("icon-l")}
                                    src={icons.iconPlus}
                                    alt=""
                                />
                            </button>
                            <button className={cx("btn-circle")}>
                                <img
                                    className={cx("icon-l")}
                                    src={icons.iconLike}
                                    alt=""
                                />
                            </button>
                        </div>
                        {/*  */}
                        <div className={cx("btn-right")}>
                            <button
                                className={cx("btn-circle")}
                                onClick={() => getData(data.id)}
                            >
                                <FontAwesomeIcon
                                    className={cx("icon-r")}
                                    icon={faChevronDown}
                                />
                            </button>
                        </div>
                    </div>
                    <div className={cx("movie-info")}>
                        <div className={cx("match")}>
                            <span>Độ trùng 90%</span>
                        </div>
                        <div className={cx("rate")}>
                            <span>{data.rate}</span>
                        </div>
                        <div className={cx("time")}>
                            <span>1h20p</span>
                        </div>
                        <div className={cx("video-qa")}>
                            <span>HD</span>
                        </div>
                    </div>
                    <div className={cx("nature")}>
                        <ul className={cx("list-")}>
                            {nature.map((item, index) => (
                                <li className={cx("-item")} key={index}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SmallTrailer;
