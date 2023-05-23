import classNames from "classnames/bind";
import styles from "./NewMovie.module.scss";
import Slide from "~/component/Slider/Slider";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

function NewMovie({ onClick }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchUserData = () => {
            fetch("http://localhost:3001/movies")
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    return setItems(data);
                });
        };
        fetchUserData();
    }, []);
    return (
        <div className={cx("wrapper-new-movie-page")}>
            <div className={cx("container")}>
                <Slide data={items} onClick={onClick} />
                <Slide data={items} onClick={onClick} />
                <Slide data={items} onClick={onClick} />
                <Slide data={items} onClick={onClick} />
                <Slide data={items} onClick={onClick} />
                <Slide data={items} onClick={onClick} />
            </div>
        </div>
    );
}
export default NewMovie;
