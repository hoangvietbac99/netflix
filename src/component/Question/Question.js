import classNames from "classnames/bind";
import styles from "./Question.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const cx = classNames.bind(styles);

function Question({ question, answer }) {
    const [showAnswer, setShowAnswer] = useState(false);
    const handleShowAnswer = () => {
        setShowAnswer(!showAnswer);
    };
    return (
        <div className={cx("wrapper-question")}>
            <div className={cx("wrapper")}>
                <div
                    className={cx("item-qa")}
                    onClick={() => handleShowAnswer()}
                >
                    <div className={cx("item-question")}>
                        <button className={cx("question")}>
                            {question}
                            <FontAwesomeIcon
                                className={cx(
                                    "icon-arrow",
                                    showAnswer && "rotate-icon"
                                )}
                                icon={faChevronUp}
                            />
                        </button>
                    </div>
                </div>
                <div className={cx("item-answer", showAnswer && "show")}>
                    <p className={cx("answer")}>{answer}</p>
                </div>
            </div>
        </div>
    );
}

export default Question;
