import classNames from "classnames/bind";
import styles from "./SmallTrailer.module.scss";
import icons from "~/assets/svg/icons";

const cx = classNames.bind(styles);

function SmallTrailer() {
  return (
    <div className={cx("wrapper-small-trailer")}>
      <div className={cx("item-info")}>
        <div className={cx("icon")}>
          <img className={cx("icon-action")} src={icons.iconPlay} alt="" />
          <img className={cx("icon-action")} src={icons.iconPlus} alt="" />
          <img className={cx("icon-action")} src={icons.iconLike} alt="" />
        </div>
        <div className={cx("introduction")}>
          <span className={cx("coincidence")}>Độ trùng 98%</span>
          <span className={cx("rating")}>16+</span>
          <span className={cx("duration")}>6 mùa</span>
          <span className={cx("sharpness")}>HD</span>
        </div>
        <div className={cx("genre")}>
          <span>tl1</span>
          <span>tl2</span>
          <span>tl3</span>
        </div>
      </div>
    </div>
  );
}

export default SmallTrailer;
