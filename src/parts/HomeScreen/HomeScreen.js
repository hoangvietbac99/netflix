import Header from "../Header/HeaderMain/Header";
import Footer from "../Footer/FooterHome/Footer";
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
