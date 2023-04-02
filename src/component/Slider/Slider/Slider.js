import classNames from "classnames/bind";
import styles from "./Slider.module.scss";
import artFilms from "~/assets/images/artFilms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiagramNext } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function Slider() {
  return (
    <div>
      <div className={cx("media-container")}>
        <div className={cx("media-scroller")}>
          {/* <!--   Group 1 --> */}
          <div className={cx("media-group")} id="group-1">
            <div className={cx("media-element")}>
              <img src={artFilms.bietDoiTiTan} alt="" />
            </div>
            <div className={cx("media-element")}>
              <img src={artFilms.bietDoiTiTan} alt="" />
            </div>
            <div className={cx("media-element")}>
              <img src={artFilms.bietDoiTiTan} alt="" />
            </div>
            <div className={cx("media-element")}>
              <img src={artFilms.bietDoiTiTan} alt="" />
            </div>
            <div className={cx("media-element")}>
              <img src={artFilms.bietDoiTiTan} alt="" />
            </div>
            <div className={cx("media-element")}>
              <img src={artFilms.bietDoiTiTan} alt="" />
            </div>
            <div className={cx("media-element")}>
              <img src={artFilms.bietDoiTiTan} alt="" />
            </div>
            <a className={cx("next")} href="#group-2" aria-label="next">
              {/* <svg>
                <use href="#next"></use>
              </svg> */}
              <div className={cx("icon")}>
                <FontAwesomeIcon icon={faDiagramNext} />
              </div>
            </a>
          </div>

          {/* <!-- Group 2   --> */}
          <div className={cx("media-group")} id="group-2">
            <a className={cx("previous")} href="#group-1">
              <svg>
                <use href="#previous"></use>
              </svg>
            </a>
            <div className={cx("media-element")}>
              <img src={artFilms.bietDoiTiTan} alt="" />
            </div>
            <div className={cx("media-element")}>
              <img src={artFilms.bietDoiTiTan} alt="" />
            </div>
            <div className={cx("media-element")}>
              <img src={artFilms.bietDoiTiTan} alt="" />
            </div>
            <div className={cx("media-element")}>
              <img src={artFilms.bietDoiTiTan} alt="" />
            </div>
            <div className={cx("media-element")}>
              <img src={artFilms.bietDoiTiTan} alt="" />
            </div>
            <div className={cx("media-element")}>
              <img src={artFilms.bietDoiTiTan} alt="" />
            </div>
            <div className={cx("media-element")}>
              <img src={artFilms.bietDoiTiTan} alt="" />
            </div>
            <a className={cx("next")} href="#group-3" aria-label="next">
              <svg>
                <use href="#next"></use>
              </svg>
            </a>
          </div>

          {/* <!-- Group 3   --> */}
          <div className={cx("media-group")} id="group-3">
            <a className={cx("previous")} href="#group-2">
              <svg>
                <use href="#previous"></use>
              </svg>
            </a>
            <div className={cx("media-element")}>
              <img src={artFilms.bietDoiTiTan} alt="" />
            </div>
            <div className={cx("media-element")}>
              <img src={artFilms.bietDoiTiTan} alt="" />
            </div>
            <div className={cx("media-element")}>
              <img src={artFilms.bietDoiTiTan} alt="" />
            </div>
            <div className={cx("media-element")}>
              <img src={artFilms.bietDoiTiTan} alt="" />
            </div>
            <div className={cx("media-element")}>
              <img src={artFilms.bietDoiTiTan} alt="" />
            </div>
            <div className={cx("media-element")}>
              <img src={artFilms.bietDoiTiTan} alt="" />
            </div>
            <div className={cx("media-element")}>
              <img src={artFilms.bietDoiTiTan} alt="" />
            </div>
            <a className={cx("next")} href="#group-4" aria-label="next">
              <svg>
                <use href="#next"></use>
              </svg>
            </a>
          </div>

          {/* <!--  Group 4  --> */}
          <div className={cx("media-group")} id="group-4">
            <a className={cx("previous")} href="#group-3">
              <svg>
                <use href="#previous"></use>
              </svg>
            </a>
            <div className={cx("media-element")}>
              <img src={artFilms.bietDoiTiTan} alt="" />
            </div>
            <div className={cx("media-element")}>
              <img src={artFilms.bietDoiTiTan} alt="" />
            </div>
            <div className={cx("media-element")}>
              <img src={artFilms.bietDoiTiTan} alt="" />
            </div>
            <div className={cx("media-element")}>
              <img src={artFilms.bietDoiTiTan} alt="" />
            </div>
            <div className={cx("media-element")}>
              <img src={artFilms.bietDoiTiTan} alt="" />
            </div>
            <div className={cx("media-element")}>
              <img src={artFilms.bietDoiTiTan} alt="" />
            </div>
            <div className={cx("media-element")}>
              <img src={artFilms.bietDoiTiTan} alt="" />
            </div>
          </div>
          <div className={cx("navigation-indicators")}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      {/* <svg>
        <symbol id="next" viewBox="0 0 256 512">
          <path
            fill="white"
            d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
          />
        </symbol>

        <symbol id="previous" viewBox="0 0 256 512">
          <path
            fill="white"
            d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
          />
        </symbol>
      </svg> */}
    </div>
  );
}
export default Slider;
