import { useEffect, useState } from "react";
import styles from "./WatchMovie.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function WatchMovie({ idMovie }) {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        const fetchMovieData = () => {
            fetch(`http://localhost:3001/movies/${idMovie}`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    return setMovie(data);
                });
        };
        fetchMovieData();
    }, [idMovie]);
    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <video
                    className={cx("movie")}
                    controls
                    src={movie.trailer}
                    poster={movie.poster}
                />
            </div>
        </div>
    );
}
export default WatchMovie;
