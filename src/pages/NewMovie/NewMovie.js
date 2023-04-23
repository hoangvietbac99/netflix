import classNames from "classnames/bind";
import styles from "./NewMovie.module.scss"
import Slide from "~/component/Slide/Slide/Slide";

const cx=classNames.bind(styles)

function NewMovie (){
    return (
        <div className={cx("wrapper-new-movie-page")}>
            <Slide />
        </div>
    )
}
export default NewMovie