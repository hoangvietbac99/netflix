import Header from "../../Header/HeaderHome/HeaderHome";
import Footer from "~/parts/Footer/FooterHome/Footer";
// import ModalTrailer from "~/component/Modal/Modal";
import classNames from "classnames/bind";
import styles from "./HomeScreeen.module.scss";
const cx = classNames.bind(styles);
function HomeScreen({ children, subNav, onClick }) {
    return (
        <div className={cx("wrapper-home-screen")}>
            <div className={cx("wrapper-header")}>
                <Header subNav={subNav} onClick={onClick} />
            </div>
            <div className={cx("wrapper-children")}>{children}</div>
            <div className={cx("overlay")}>{/* <ModalTrailer /> */}</div>
            <div className={cx("wrapper-footer")}>
                <Footer />
            </div>
        </div>
    );
}
export default HomeScreen;
