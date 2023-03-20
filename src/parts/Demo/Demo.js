import styles from "./Demo.module.scss";
import classNames from "classnames/bind";
import images from "~/assets/images";

const cx = classNames.bind(styles);
function Demo() {
  return (
    <div>
      <img className={cx("poster")} src={images.poster} alt="" />
    </div>
  );
}

export default Demo;
