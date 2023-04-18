import classNames from "classnames/bind";
import styles from "./Category.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCaretUp} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import icons from "~/assets/svg/icons";
const cx= classNames.bind(styles)
const categorys = {
    group1:[
        {
            title:"Anh",
            link:"/"
        },
        {
            title: "Anime",
            link:"/"
        },
        {
            title: "Châu Á",
            link:"/"
          },{
            title: "Châu Âu",
            link:"/"
          },{
            title: "Hài",
            link:"/"
          },{
            title: "Hành động",
            link:"/"
          },{
            title: "Khoa học & thiên nhiên",
            link:"/"
          },
    ],
    group2:[
        {
            title: "Khoa học viễn tưởng & giả tưởng",
            link:"/"
        },
        {
            title: "kinh dị",
            link:"/"
          },{
            title: "Lãng mạn",
            link:"/"
          },{
            title: "Loạt phim tài liệu",
            link:"/"
          },{
            title: "Mỹ",
            link:"/"
          },{
            title: "Ngày trái đất",
            link:"/"
          },{
            title: "Phim chính kịch",
            link:"/"
          },
    ],
    group3:[
        {
            title: "Phim chính kịch Hàn Quốc",
            link:"/"
          },
        {
          title: "Phim giật gân",
          link:"/"
        },{
          title: "Tội phạm",
          link:"/"
        },{
          title: "Trẻ em",
          link:"/"
        },{
          title: "Truyền hình thực tế & tọa đàm",
          link:"/"
        },{
          title: "Tuổi teen",
          link:"/"
        },
    ]
}
function Category(){
    const [showCategory, setShowCategory] = useState(false)
    const handleShowCategory =()=> {
        setShowCategory(!showCategory)

    }
  return(
    <div className={cx("wrapper-category")}>
            <div className={cx("genre-left")}>
              <div className={cx("genre-title")}> Phim abc</div>
                <div className={cx("category")} onClick={()=>handleShowCategory()} >Thể loại
                  <FontAwesomeIcon className={cx("icon-category", showCategory && "rotate-icon" )} icon={faCaretUp} />
                  {showCategory && <div className={cx("list-category")}>
                      <ul className={cx("list-category-conlumn")}>
                        {categorys.group1.map((category, index)=>(
                          <li className={cx("item-category")} key={index}>{category.title}</li>
                        ))}
                      </ul>
                      <ul className={cx("list-category-conlumn")}>
                        {categorys.group2.map((category, index)=>(
                            <li className={cx("item-category")} key={index}>{category.title}</li>
                        ))}
                      </ul>
                      <ul className={cx("list-category-conlumn")}>
                        {categorys.group3.map((category, index)=>(
                            <li className={cx("item-category")} key={index}>{category.title}</li>
                        ))}
                      </ul>
                </div>}
              </div>
            </div>
            <div className={cx("genre-right")}>
                <div className={cx("icon")}>
                    <button className={cx("icon-bar")} >
                      <img className={cx("icon-")} src={icons.iconBars} alt=""/>
                    </button>
                </div>
                <div className={cx("icon")}>
                    <button className={cx("icon-table")} >
                      <img className={cx("icon-")} src={icons.iconTable} alt=""/>
                    </button>
                </div>
            </div>
    </div>)
}
export default Category