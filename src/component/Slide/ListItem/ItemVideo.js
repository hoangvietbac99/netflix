import classNames from "classnames/bind";
import styles from "./ItemVideo.module.scss";
import SmallTrailer from "../SmallTrailer/SmallTrailer";
// import { useState } from "react";
const cx = classNames.bind(styles);

function ItemVideo({ data }) {
    return (
        <div className={cx("list-item")}>
            <img src={data.picture} alt="" />
            <div className={cx("show-trailer")}>
                <SmallTrailer data={data} />
            </div>
        </div>
    );
}

export default ItemVideo;
