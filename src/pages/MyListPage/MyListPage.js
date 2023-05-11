import classNames from "classnames/bind";
import styles from "./MyListPage.module.scss";
import ScreenItem from "~/parts/Screen/TypeScreen/ScreenItem/ScreenItem";
import { useState, useEffect } from "react";
const cx = classNames.bind(styles);
function MyListPage() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchUserData = () => {
            fetch("http://localhost:3001/demo")
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
        <div className={cx("wrapper-my-list-page")}>
            <ScreenItem data={items} />
        </div>
    );
}
export default MyListPage;
