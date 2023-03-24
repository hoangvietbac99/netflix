import styles from "./Demo.module.scss";
import classNames from "classnames/bind";
import images from "~/assets/images/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faExclamationCircle,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Demo() {
  return (
    <div>
      <div>
        <div className={cx("frame-poster")}>
          <img className={cx("poster")} src={images.poster} alt="" />
          <div className={cx("info-poster")}>
            <img className={cx("title-logo")} src={images.title} alt="" />
            <div className={cx("description")}>
              Khi Chris và con trai bị đuổi ra khỏi nhà, cả hai đã phải trải qua
              một giai đoạn khó khăn khi Chris chấp nhận thử việc không lương
              tại một công ty môi giới chứng khoán.
            </div>
            <div className={cx("play-info")}>
              <button className={cx("play-video")}>
                <FontAwesomeIcon icon={faPlay} />
                <span>Phát</span>
              </button>
              <button className={cx("information")}>
                <FontAwesomeIcon icon={faExclamationCircle} />
                <span>Thông Tin Khác</span>
              </button>
            </div>
          </div>
          <div className={cx("sound-rating")}>
            <button className={cx("sound")}>
              {true && <FontAwesomeIcon icon={faCircle} />}
            </button>
            <div className={cx("rating")}>
              <span className={cx("age")}>16+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demo;
