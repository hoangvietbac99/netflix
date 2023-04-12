import classNames from "classnames/bind";
import styles from "./ListItem.module.scss";
import artFilms from "~/assets/images/artFilms";
// import SmallTrailer from "../SmallTrailer/SmallTrailer";
// import { useState } from "react";
// import SmallTrailer from "../SmallTrailer/SmallTrailer";
const cx = classNames.bind(styles);

function ListItem() {
  // const [showSide, setShowSide] = useState(false);

  return (
    <div className={cx("list-item")}>
      <img src={artFilms.bietDoiJoe} alt="" />
      <div className={cx("show-small-video")}>{/* <SmallTrailer /> */}</div>
    </div>
  );
}

export default ListItem;
