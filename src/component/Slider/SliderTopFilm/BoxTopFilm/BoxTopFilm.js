import classNames from "classnames/bind";
import styles from "./BoxTopFilm.module.scss";
import ordinal from "~/assets/svg/numbers";
import topFilms from "~/assets/images/boxFilmTop10";
const cx = classNames.bind(styles);

const listFilm = [
  {
    art: topFilms.top1,
    number: ordinal.number1,
  },
  {
    art: topFilms.top2,
    number: ordinal.number2,
  },
  {
    art: topFilms.top3,
    number: ordinal.number3,
  },
  {
    art: topFilms.top4,
    number: ordinal.number4,
  },
  {
    art: topFilms.top5,
    number: ordinal.number5,
  },
  {
    art: topFilms.top6,
    number: ordinal.number6,
  },
  {
    art: topFilms.top7,
    number: ordinal.number7,
  },
  {
    art: topFilms.top8,
    number: ordinal.number8,
  },
  {
    art: topFilms.top9,
    number: ordinal.number9,
  },
  {
    art: topFilms.top10,
    number: ordinal.number10,
  },
];

function BoxFilmTop() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>
        <h2>Top 10 chương trình truyền hình tại Việt Nam hôm nay</h2>
      </div>
      <div className={cx("list")}>
        {listFilm.map((film, index) => (
          <div key={index} className={cx("wrapper-box")}>
            <img className={cx("number")} src={film.number} alt="" />
            <img className={cx("art")} src={film.art} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BoxFilmTop;
