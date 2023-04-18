import Header from "~/parts/Header/Header";
import Banner from "~/parts/Banner/Banner";
import Footer from "~/parts/Footer/Footer";
import classNames from "classnames/bind";
import styles from "./Home.module.scss"
const cx = classNames.bind(styles)
function Home() {
  return (
    <div className={cx("wrapper-home-page")}>
      <Header sub={false} />
      <Banner />
      <Footer />
    </div>
  );
}

export default Home;
