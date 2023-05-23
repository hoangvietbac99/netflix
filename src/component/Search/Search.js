import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadlessTippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { useState, useRef, useEffect } from "react";
import MovieSearch from "../MovieSearch/MovieSearch";
import { useDebounce } from "~/hooks";
const cx = classNames.bind(styles);
function Search({ onClick }) {
    const [valueInput, setValueInput] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const inputRef = useRef();
    const debouncedValue = useDebounce(valueInput, 500);
    useEffect(() => {
        fetch(`http://localhost:3001/movies?q=${debouncedValue}&tyle=less`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setSearchResult(data);
            });
    }, [debouncedValue]);
    //show result
    const handleShowSearch = () => {
        setValueInput("");
        setSearchResult([]);
        setTimeout(() => {
            inputRef.current.focus();
        }, 0);
    };
    //click item hide result and show modal
    const handleClick = () => {
        setShowResult(false);
    };
    // chang value in put -> show result
    const handleChange = (e) => {
        const value = e.target.value;
        if (!value.startsWith(" ")) {
            setValueInput(value);
            setShowResult(true);
            setSearchResult(searchResult);
            if (searchResult === []) {
                console.log("kkk");
            }
            if (value === "") {
                setShowResult(false);
            }
        }
    };
    const handleClear = () => {
        inputRef.current.focus();
        setValueInput("");
        setSearchResult([]);
        setShowResult(false);
    };
    const handleHideResult = () => {
        setSearchResult([]);
        setShowResult(false);
    };
    return (
        <div className={cx("wrapper-input-search")}>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div
                        onClick={() => handleClick()}
                        className={cx("search-result")}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <div className={cx("result")}>
                            {searchResult.map((movie) => (
                                <MovieSearch
                                    onClick={onClick}
                                    key={movie.id}
                                    data={movie}
                                />
                            ))}
                        </div>
                    </div>
                )}
                onClickOutside={() => handleHideResult()}
            >
                <div className={cx("container")}>
                    <input
                        className={cx("show-3")}
                        type="checkbox"
                        id="show-3"
                    />
                    <div className={cx("search")}>
                        <label
                            className={cx("show-search")}
                            htmlFor="show-3"
                            onClick={() => handleShowSearch()}
                        >
                            <FontAwesomeIcon
                                className={cx("icon-search")}
                                icon={faSearch}
                            />
                        </label>
                        <input
                            ref={inputRef}
                            spellCheck={false}
                            className={cx("input-search")}
                            placeholder="Tìm kiếm"
                            value={valueInput}
                            onChange={(e) => handleChange(e)}
                            onFocus={(e) => handleChange(e)}
                        />
                        <div
                            className={cx("clear")}
                            onClick={() => handleClear()}
                        >
                            <FontAwesomeIcon icon={faXmark} />
                        </div>
                    </div>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
