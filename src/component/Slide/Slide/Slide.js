import classNames from "classnames/bind";
import styles from "./Slide.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesRight,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import ListItem from "../ListItem/ListItem";
import { useRef, useState } from "react";
const cx = classNames.bind(styles);

function Slide() {
  const slideRef = useRef();
  const [showArrow, setShowArrow] = useState(false);
  const handleArrow = (arrow) => {
    let distance = slideRef.current.getBoundingClientRect().x - 70;
    if (arrow === "prev" && showArrow) {
      slideRef.current.style = `transform:translateX(${distance + 1380}px)`;
    }
    if (arrow === "next") {
      setShowArrow(true);
      slideRef.current.style = `transform:translateX(${distance - 1380}px)`;
    }
  };

  return (
    <div className={cx("wrapper-slide")}>
      <h2 className={cx("title-slide")}>
        <a href="/">
          <div className={cx("header-title")}>Title</div>
          <div className={cx("header-more-title")}>
            <div className={cx("see-link")}>Show All</div>
            <FontAwesomeIcon
              className={cx("icon-see-link")}
              icon={faAnglesRight}
            />
          </div>
        </a>
      </h2>
      <div className={cx("slide")}>
        <div
          onClick={() => handleArrow("prev")}
          className={cx("directional", "left")}
          style={{ display: !showArrow && "none" }}
        >
          <FontAwesomeIcon className={cx("icon")} icon={faChevronLeft} />
        </div>
        <div className={cx("container")} ref={slideRef}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <div
          onClick={() => handleArrow("next")}
          className={cx("directional", "right")}
        >
          <FontAwesomeIcon className={cx("icon")} icon={faChevronRight} />
        </div>
      </div>
    </div>
  );
}

export default Slide;
