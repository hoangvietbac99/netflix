import classNames from "classnames/bind";
import styles from "./Notification.module.scss";
import picture from "~/assets/images/topFilmNotification";

const cx = classNames.bind(styles);
const optionFilms = [
  {
    picture: picture.ngoKhong,
    titleItem: "TOP 10: Phim Việt Nam",
    titleMore: "Xem các nội dung phổ biến",
    relativeTime: "Cách đây 1 tuần",
  },
  {
    picture: picture.jungle,
    titleItem: "Đã ra mắt",
    titleMore: "Thưởng thức tập mới",
    relativeTime: "Cách đây 2 tuần",
  },
  {
    picture: picture.kedeobam,
    titleItem: "Đã ra mắt",
    titleMore: "Xem các nội dung phổ biến",
    relativeTime: "Cách đây 2 tuần",
  },
  {
    picture: picture.vinhquangtrongthuhan,
    titleItem: "Đã ra mắt",
    titleMore: "Xem các nội dung phổ biến",
    relativeTime: "Cách đây 2 tuần",
  },
  {
    picture: picture.kevodanh,
    titleItem: "Nội dung mớI",
    titleMore: "Kẻ vô danh",
    relativeTime: "Cách đây 1 tuần",
  },
  {
    picture: picture.mh370,
    titleItem: "Nội dung mới",
    titleMore: "MH370: Chiếc máy bay biến mất",
    relativeTime: "Cách đây 1 tuần",
  },
];
function Notification() {
  return (
    <div className={cx("wrapper-menu-top-film")}>
      {optionFilms.map((option, index) => (
        <div className={cx("top-film-item")} key={index}>
          <img className={cx("picture-item")} src={option.picture} alt="" />
          <div className={cx("content-item")}>
            <div className={cx("title-item")}>{option.titleItem}</div>
            <div className={cx("title-more")}>{option.titleMore}</div>
            <span className={cx("relative-time")}>{option.relativeTime}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Notification;
