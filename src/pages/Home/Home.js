import Header from "~/parts/Header/Header";
import Footer from "~/parts/Footer/Footer";
import Screen from "~/parts/Screen/Screen";
import classNames from "classnames/bind";
import styles from "./Home.module.scss"
import { useState } from "react";
const cx = classNames.bind(styles)
function Home() {
  const [changeScreen, setChangeScreen] = useState(true)
  const handleChangeScreen = ()=> {
    setChangeScreen(!changeScreen)
  }
  return (
    <div className={cx("wrapper-home-page")}>
      <Header onClick={()=>handleChangeScreen()} subNav={true} />
      <Screen showScreen={changeScreen}  />
      <Footer />
    </div>
  );
}

export default Home;
