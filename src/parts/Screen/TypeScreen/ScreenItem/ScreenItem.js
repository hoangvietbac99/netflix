import classNames from "classnames/bind";
import styles from "./ScreenItem.module.scss"
import ListItem from "~/component/Slide/ListItem/ListItem";
const cx= classNames.bind(styles)

function ScreenItem (){
    return(
        <div className={cx("wrapper-sub-screen")}>
            <div className={cx("sub-screen")}>
                <ul className={cx("list-movie")}>
                   <li className={cx("movie-item")}>
                    <ListItem />
                   </li>
                   <li className={cx("movie-item")}>
                    <ListItem />
                   </li>
                   <li className={cx("movie-item")}>
                    <ListItem />
                   </li>
                   <li className={cx("movie-item")}>
                    <ListItem />
                   </li>
                   <li className={cx("movie-item")}>
                    <ListItem />
                   </li>
                   <li className={cx("movie-item")}>
                    <ListItem />
                   </li>
                   <li className={cx("movie-item")}>
                    <ListItem />
                   </li>
                   <li className={cx("movie-item")}>
                    <ListItem />
                   </li>
                   <li className={cx("movie-item")}>
                    <ListItem />
                   </li>
                   <li className={cx("movie-item")}>
                    <ListItem />
                   </li>
                   <li className={cx("movie-item")}>
                    <ListItem />
                   </li>
                   <li className={cx("movie-item")}>
                    <ListItem />
                   </li>
                </ul>
            </div>
        </div>
    )
}
export default ScreenItem;