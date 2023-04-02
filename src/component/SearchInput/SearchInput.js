import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useRef, useState } from "react";
import styles from "./SearchInput.module.scss";
import icons from "~/assets/svg/icons";
const cx = classNames.bind(styles);
function SearchInput() {
  const inputElement = useRef();
  const [showSearch, setShowSearch] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const handleShowSearch = () => {
    setShowSearch(!showSearch);
    // inputElement.current.focus();
  };
  const focusInput = () => {
    setTimeout(() => {
      inputElement.current.focus();
    });
  };
  const handleClear = () => {
    inputElement.current.focus();
    setSearchValue("");
  };
  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };
  return (
    <div className={cx("wrapper-input")}>
      {showSearch ? (
        <div onClick={handleShowSearch}>
          <img
            className={cx("icon-search-alone")}
            onClick={focusInput}
            src={icons.iconSearch}
            alt=""
          />
        </div>
      ) : (
        <div className={cx("wrapper-input-search")}>
          <img
            onClick={handleShowSearch}
            className={cx("icon-search-input")}
            src={icons.iconSearch}
            alt=""
          />
          <input
            ref={inputElement}
            value={searchValue}
            onChange={handleChange}
            spellCheck={false}
            className={cx("search-input")}
            placeholder="Phim, Diễn Viên, Thể loại..."
          />
          <div className={cx("delete-input")}>
            {!!searchValue && (
              <FontAwesomeIcon
                onClick={handleClear}
                className={cx("icon-delete")}
                icon={faCircleXmark}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchInput;
