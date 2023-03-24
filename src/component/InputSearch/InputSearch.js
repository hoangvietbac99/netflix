import { faCircleXmark, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useRef, useState } from "react";
import styles from "./InputSearch.module.scss";
const cx = classNames.bind(styles);
function InputSearch() {
  const inputElement = useRef();
  const [showSearch, setShowSearch] = useState(false);
  const focusInput = () => {
    setTimeout(() => {
      inputElement.current.focus();
    }, 0);
  };
  const handleShowSearch = () => {
    setShowSearch(!showSearch);
  };
  return (
    <div className={cx("wrapper-input")}>
      {showSearch ? (
        <div className={cx("wrapper-input-search")}>
          <FontAwesomeIcon
            onClick={handleShowSearch}
            className={cx("icon-search-input")}
            icon={faSearch}
          />
          <input
            className={cx("search-input")}
            ref={inputElement}
            placeholder="Phim, Diễn Viên, Thể loại..."
          />
          <FontAwesomeIcon
            className={cx("delete-value")}
            icon={faCircleXmark}
          />
        </div>
      ) : (
        <div onClick={focusInput}>
          <FontAwesomeIcon
            onClick={handleShowSearch}
            className={cx("icon-search-alone")}
            icon={faSearch}
          />
        </div>
      )}
    </div>
  );
}

export default InputSearch;
