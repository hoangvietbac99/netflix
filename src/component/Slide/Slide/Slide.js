import classNames from "classnames/bind";
import styles from "./Slide.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesRight,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import ListItem from "../ListItem/ListItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import { useState } from "react";
const cx = classNames.bind(styles);
function Slide() {
  
  // const [showPrev, setShowPrev] = useState(false)
  
  function HandlePrevArrow(props) {
    
    const { onClick } = props;
    return (
      // showPrev &&  
      <div
        className={cx("directional", "left")}
        onClick={onClick}
      >
      <div >
        <FontAwesomeIcon className={cx("icon")} icon={faChevronLeft} />
      </div></div>
    );
  }
  function HandleNextArrow(props) {
    const { onClick } = props;
    return (
      <div 
        className={cx("directional", "right")}
        onClick={onClick}
      >
        <div>
          <FontAwesomeIcon className={cx("icon")} icon={faChevronRight} />
        </div>
      </div>
    )
  }
    const settings ={
      prevArrow: <HandlePrevArrow />,
      nextArrow: <HandleNextArrow  />,
      dots: true,
      infinite: true,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
    }
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
        <Slider {...settings} >
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
        </Slider>
      </div>
    </div>
  );
}

export default Slide;
