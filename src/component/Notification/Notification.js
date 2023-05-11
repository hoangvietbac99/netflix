import classNames from "classnames/bind";
import styles from "./Notification.module.scss";

const cx = classNames.bind(styles);
const optionFilms = [
    {
        picture:
            "https://dnm.nflximg.net/api/v6/kvDymu0eXRyicIuSUzvRrxrm5dU/AAAABf9MJH-RxqUgcp6CoiZZ0ETPuZNEH1IW_Ie_z7VwVyLM2ft2g5M5tfZaz-WxxqA2lWqdzaxF2k7tsVwIbPyaHz1cjd5WVEkm70A77roMwyB5RbYm7QSpRVrTVWJM2bMf8zlFWvHz_Ccc6Zo.jpg?r=bd0",
        titleItem: "TOP 10: Phim Việt Nam",
        titleMore: "Xem các nội dung phổ biến",
        relativeTime: "Cách đây 1 tuần",
    },
    {
        picture:
            "https://dnm.nflximg.net/api/v6/kvDymu0eXRyicIuSUzvRrxrm5dU/AAAABRzCmHYW6mLKLaHw5nMoiyiN1WFUmfdNppjqHve93K82OCSFPol_chgdeukPObpQYglUzU1WrVCXnohEEY7HMI3p2GO29rT6KL9mdNLQs2qawByaQN1V9MesZoo8SpQ5p90qhL0ScJC0q7I.jpg?r=1ef",
        titleItem: "Đã ra mắt",
        titleMore: "Thưởng thức tập mới",
        relativeTime: "Cách đây 2 tuần",
    },
    {
        picture:
            "https://assets.nflxext.com/us/email/gem/comingsoon/csInapp_112x63.png",
        titleItem: "Đã ra mắt",
        titleMore: "Xem các nội dung phổ biến",
        relativeTime: "Cách đây 2 tuần",
    },
    {
        picture:
            "https://assets.nflxext.com/us/email/gem/comingsoon/csInapp_112x63.png",
        titleItem: "Đã ra mắt",
        titleMore: "Xem các nội dung phổ biến",
        relativeTime: "Cách đây 2 tuần",
    },
    {
        picture:
            "https://assets.nflxext.com/us/email/gem/comingsoon/csInapp_112x63.png",
        titleItem: "Nội dung mớI",
        titleMore: "Kẻ vô danh",
        relativeTime: "Cách đây 1 tuần",
    },
    {
        picture:
            "https://assets.nflxext.com/us/email/gem/comingsoon/csInapp_112x63.png",
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
                    <img
                        className={cx("picture-item")}
                        src={option.picture}
                        alt=""
                    />
                    <div className={cx("content-item")}>
                        <div className={cx("title-item")}>
                            {option.titleItem}
                        </div>
                        <div className={cx("title-more")}>
                            {option.titleMore}
                        </div>
                        <span className={cx("relative-time")}>
                            {option.relativeTime}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Notification;
