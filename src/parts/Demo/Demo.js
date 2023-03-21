import styles from "./Demo.module.scss";
import classNames from "classnames/bind";
// import images from "~/assets/images";

const cx = classNames.bind(styles);
function Demo() {
  return (
    <div>
      <div className={cx("poster")}>
        <div className={cx("frame-poster")}>
          <div className={cx("info-poster")}></div>
        </div>
      </div>
    </div>
  );
}

export default Demo;
