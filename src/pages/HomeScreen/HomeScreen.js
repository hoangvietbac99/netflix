import Header from "../../parts/Header/HeaderMain/Header";
import Footer from "../../parts/Footer/FooterHome/Footer";
import { Fragment } from "react";


function HomeScreen ({children, subNav, onClick}){

    return (
    <Fragment>
        <Header subNav={subNav} onClick={onClick} />
        {children}
        <Footer />
    </Fragment>)
}
export default HomeScreen;
