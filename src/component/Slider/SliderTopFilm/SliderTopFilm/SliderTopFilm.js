import classNames from "classnames/bind";
import styles from "./SliderTopFilm.module.scss";
import BoxFilmTop from "../BoxTopFilm/BoxTopFilm";
const cx = classNames.bind(styles);
function SliderTopFilm() {
  return (
    <div className={cx("slider")}>
      <BoxFilmTop />
    </div>
  );
}

export default SliderTopFilm;
