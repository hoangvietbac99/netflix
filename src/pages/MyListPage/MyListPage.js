import classNames from "classnames/bind";
import styles from "./MyListPage.module.scss";
import ScreenItem from "~/parts/Screen/TypeScreen/ScreenItem/ScreenItem";
const cx = classNames.bind(styles);
function MyListPage() {
    return (
        <div className={cx("wrapper-my-list-page")}>
            <ScreenItem />
        </div>
    );
}
export default MyListPage;
