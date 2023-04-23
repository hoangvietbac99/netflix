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
import { useState } from "react";
const cx = classNames.bind(styles);
function Slide() {
  
  const [showPrev, setShowPrev] = useState(false)
  const [showDots, setShowDots] = useState(false)
  const handleShowArrowLeft = ()=>{
    setShowPrev(true)
  }
  const handleShowDots =()=>{
    setShowDots(true)
  }
  const handleHideDots =()=>{
    setShowDots(false)
  }
  function HandlePrevArrow(props) {
    const { onClick } = props;
    return (
      <div>
        { showPrev && (<div
        className={cx("directional", "left")}
        onClick={onClick}
      >
        <div >
          <FontAwesomeIcon className={cx("icon")} icon={faChevronLeft} />
        </div>
      </div>)}
      </div>
    );
  }
  function HandleNextArrow(props) {
    const { onClick } = props;
    return (
      <div onClick={()=>handleShowArrowLeft()}>
        <div 
        className={cx("directional", "right")}
        onClick={onClick}
      >
        <div>
          <FontAwesomeIcon className={cx("icon")} icon={faChevronRight} />
        </div>
      </div>
      </div>
    )
  }
    const settings ={
      prevArrow: <HandlePrevArrow />,
      nextArrow: <HandleNextArrow  />,
      dots: showDots,
      infinite: true,
      lazyLoad: true,
      speed: 750,
      slidesToShow: 6.25,
      slidesToScroll: 6,
      appendDots: dots => (
      <div
      className={cx("list-dot")}
        style={{
          position: "relative",
          top: "-140px",
          right:"-1340px"
        }}
      >
        <ul 
          className={cx("dots")}
          style={{
          
          
          }}> {dots} </ul>
      </div>
      ),
      customPaging: () => (
      <div 
        className={cx('dot')}
        style={{
          
        }}
      >
        {""}
      </div>
      )
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
      <div onMouseMove={()=>handleShowDots()} onMouseOut={()=>handleHideDots()} className={cx("slide")}>
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
