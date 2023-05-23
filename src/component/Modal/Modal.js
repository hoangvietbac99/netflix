import classNames from "classnames/bind";
import styles from "./Modal.module.scss";
import icons from "~/assets/svg/icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import linkPage from "~/pages/LinkPage/linkPage";

const cx = classNames.bind(styles);

function Modal({ idMovie, onClick }) {
    const [modal, setModal] = useState([]);
    const handleWatchMovie = () => {
        onClick(modal.id);
    };
    useEffect(() => {
        const fetchMovieData = () => {
            fetch(`http://localhost:3001/movies/${idMovie}`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    return setModal(data);
                });
        };
        fetchMovieData();
    }, [idMovie]);

    return (
        <div className={cx("wrapper-modal")}>
            <div className={cx("container")}>
                <div className={cx("trailer")}>
                    <div className={cx("movie")}>
                        <video
                            className={cx("poster")}
                            autoPlay
                            poster={modal.poster}
                            src={modal.trailer}
                        />
                        <button className={cx("exit")} onClick={onClick}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                        <div className={cx("action")}>
                            <img
                                className={cx("title")}
                                alt=""
                                src={modal.title}
                            />
                            <div className={cx("btn-")}>
                                <Link
                                    to={linkPage.watchMovie}
                                    className={cx("link-")}
                                    onClick={() => handleWatchMovie()}
                                >
                                    <button className={cx("play")}>
                                        <img
                                            className={cx("icon")}
                                            src={icons.iconPlay}
                                            alt=""
                                        />
                                        <span>Phát</span>
                                    </button>
                                </Link>
                                <button className={cx("btn-icon")}>
                                    <img
                                        className={cx("icon")}
                                        src={icons.iconPlus}
                                        alt=""
                                    />
                                </button>
                                <button className={cx("btn-icon")}>
                                    <img
                                        className={cx("icon")}
                                        src={icons.iconLike}
                                        alt=""
                                    />
                                </button>
                            </div>
                        </div>
                        <div className={cx("over-bt")}></div>
                    </div>
                </div>
                <div className={cx("intro")}>
                    <div className={cx("infomation")}>
                        <h2>{modal.name}</h2>
                        <div className={cx("content-info")}>
                            <div className={cx("movie-info")}>
                                <div className={cx("match")}>
                                    <span>Độ trùng 90%</span>
                                </div>
                                <div className={cx("rate")}>
                                    <span>{modal.rate}</span>
                                </div>
                                <div className={cx("time")}>
                                    <span>1h20p</span>
                                </div>
                                <div className={cx("video-qa")}>
                                    <span>HD</span>
                                </div>
                            </div>
                            <div className={cx("content")}>
                                <p>{modal.content}</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx("intro-movie")}>
                        <div className={cx("author-actor")}>
                            <div className={cx("author")}>
                                <span>
                                    {`Tác giả: `}
                                    <span>{modal.author} </span>
                                </span>
                            </div>
                            <div className={cx("actor")}>
                                <span>
                                    Diễn viên: <span>{modal.actor}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("content-similar")}></div>
            </div>
        </div>
    );
}
export default Modal;
