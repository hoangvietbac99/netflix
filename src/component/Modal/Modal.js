import classNames from "classnames/bind";
import styles from "./Modal.module.scss";
import icons from "~/assets/svg/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);
function ModalTrailer({ idMovie, onClick }) {
    const [modal, setModal] = useState([]);
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
        <div className={cx("wrapper-modal")} onClick={onClick}>
            <div className={cx("container")}>
                <div className={cx("trailer")}>
                    <div className={cx("movie")}>
                        <img
                            className={cx("poster")}
                            alt=""
                            src={modal.poster}
                        />

                        <div className={cx("action")}>
                            <img
                                className={cx("title")}
                                alt=""
                                src={modal.title}
                            />
                            <div className={cx("btn-")}>
                                <button className={cx("btn-icon", "play")}>
                                    <img
                                        className={cx("icon")}
                                        src={icons.iconPlay}
                                        alt=""
                                    />
                                </button>
                                <button className={cx("btn-icon", "l-p")}>
                                    <img
                                        className={cx("icon")}
                                        src={icons.iconPlus}
                                        alt=""
                                    />
                                </button>
                                <button className={cx("btn-icon", "l-p")}>
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
                    <div className={cx("infomation")}>
                        <div className={cx("content-info")}>
                            <div className={cx("movie-info")}>
                                <div className={cx("match")}>
                                    <span>Độ trùng 90%</span>
                                </div>
                                <div className={cx("rate")}>
                                    <span>X+</span>
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
                </div>
                <div className={cx("intro")}>
                    <div className={cx("intro-movie")}>
                        <h2>{modal.name}</h2>
                        <button className={cx("exit")} onClick={onClick}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                        <div className={cx("author-actor")}>
                            <div className={cx("actor")}>
                                {`Diễn viên: ${modal.actor}`}
                            </div>
                            <div className={cx("author")}>
                                <span>
                                    {`Tác giả: `}
                                    <span>{modal.author} </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={cx("content-similar")}></div>
                </div>
            </div>
        </div>
    );
}
export default ModalTrailer;
