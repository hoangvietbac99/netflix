import Slide from "~/component/Slide/Slide/Slide";
import classNames from "classnames/bind";
import styles from "./ScreenList.module.scss"
import icons from "~/assets/svg/icons";
import posters from "~/assets/images/posters/Posters";
import titles from "~/assets/images/posters/titlePoster";
const cx= classNames.bind(styles)

function ScreenList({data}) {
  return (
    <div className={cx("wrapper-main-content")}>
      <div className={cx("wrapper-banner")}>
        <div className={cx("wrapper-billboard")}>
          <img className={cx("poster")} src={posters.posterMuuCau} alt="" />
          <div className={cx("info-poster")}>
            <img className={cx("title-logo")} src={titles.titleMuuCau} alt="" />
            <div className={cx("description")}>
              Khi Chris và con trai bị đuổi ra khỏi nhà, cả hai đã phải trải qua một
              giai đoạn khó khăn khi Chris chấp nhận thử việc không lương tại một
              công ty môi giới chứng khoán.
            </div>
          <div className={cx("play-info")}>
            <button className={cx("play-video")}>
              <img className={cx("icon-play")} src={icons.iconPlay} alt="" />
              <span className={cx("title-play")}>Phát</span>
            </button>
            <button className={cx("information")}>
              <img className={cx("icon-info")} src={icons.iconInfo} alt="" />
              <span className={cx("title-info")}>Thông tin khác</span>
            </button>
          </div>
        </div>
        <div className={cx("sound-rating")}>
            <button className={cx("circle-rotate")}>
              <img className={cx("rotate")} src={icons.iconRotate} alt="" />
            </button>
            <div className={cx("rating")}>
              <span className={cx("age")}>13+</span>
            </div>
          </div>
        <div className={cx("shadow")}></div>
      </div>
      <div className={cx("wrapper-slider")}>
        <Slide />
        <Slide />
      </div>
      </div>
    </div>
  );
}

export default ScreenList;
