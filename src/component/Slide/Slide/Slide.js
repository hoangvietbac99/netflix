import classNames from "classnames/bind";
import styles from "./Slide.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAnglesRight,
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import ItemVideo from "../ListItem/ItemVideo";
const cx = classNames.bind(styles);
function Slide({ data, onClick }) {
    const [showDots, setShowDots] = useState(false);

    const handleShowDots = () => {
        setShowDots(true);
    };
    const handleHideDots = () => {
        setShowDots(false);
    };
    function HandlePrevArrow(props) {
        const { onClick } = props;
        return (
            <div>
                <div
                    onMouseMove={() => handleShowDots()}
                    onMouseOut={() => handleHideDots()}
                    className={cx("directional", "left")}
                    onClick={onClick}
                >
                    <div>
                        <FontAwesomeIcon
                            className={cx("icon")}
                            icon={faChevronLeft}
                        />
                    </div>
                </div>
            </div>
        );
    }
    function HandleNextArrow(props) {
        const { onClick } = props;
        return (
            <div
                onMouseMove={() => handleShowDots()}
                onMouseOut={() => handleHideDots()}
            >
                <div className={cx("directional", "right")} onClick={onClick}>
                    <div>
                        <FontAwesomeIcon
                            className={cx("icon")}
                            icon={faChevronRight}
                        />
                    </div>
                </div>
            </div>
        );
    }
    const settings = {
        prevArrow: <HandlePrevArrow />,
        nextArrow: <HandleNextArrow />,
        infinite: true,
        dots: showDots,
        speed: 750,
        slidesToShow: 6,
        slidesToScroll: 6,
        appendDots: (dots) => (
            <div
                className={cx("list-dot")}
                style={{
                    position: "relative",
                    bottom: "0px",
                }}
            >
                <ul className={cx("dots")} style={{}}>
                    {" "}
                    {dots}{" "}
                </ul>
            </div>
        ),
        customPaging: () => (
            <div className={cx("dot")} style={{}}>
                {""}
            </div>
        ),
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    };
    return (
        <div className={cx("wrapper-slide")}>
            <div className={cx("title-slide")}>
                <a href="/">
                    <div className={cx("header-title")}>Title</div>
                    <div className={cx("header-more-title")}>
                        <div className={cx("see-link")}>Show all</div>
                        <FontAwesomeIcon
                            className={cx("icon-see-link")}
                            icon={faAnglesRight}
                        />
                    </div>
                </a>
            </div>
            <div className={cx("slide")}>
                <Slider {...settings}>
                    {data.map((item) => (
                        <ItemVideo
                            key={item.id}
                            data={item}
                            onClick={onClick}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Slide;
