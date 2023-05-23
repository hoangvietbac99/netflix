import classNames from "classnames/bind";
import styles from "./MovieSearch.module.scss";
const cx = classNames.bind(styles);

function MovieSearch({ data, onClick }) {
    const handleClick = () => {
        onClick("modal", data.id);
    };
    return (
        <div
            className={cx("wrapper-movie-search")}
            onClick={() => handleClick()}
        >
            <div className={cx("container")}>
                <img className={cx("picture")} src={data.picture} alt="" />
                <div className={cx("content")}>
                    <div className={cx("name-movie")}>
                        <h2>
                            {data.name}
                            <div className={cx("rate")}>{data.rate}</div>
                        </h2>
                    </div>

                    <div className={cx("content-movie")}>
                        <p>
                            {data.content.length > 65
                                ? `${data.content.substring(0, 65)}...`
                                : data.content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieSearch;
