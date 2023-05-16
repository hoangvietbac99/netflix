import { Fragment } from "react";
import ScreenItem from "./ScreenItem/ScreenItem";
import ScreenList from "./ScreenSlide/ScreenSlide";
function Screen({ changeScreen, data, onClick }) {
    return (
        <Fragment>
            {changeScreen === true ? (
                <ScreenList data={data} onClick={onClick} />
            ) : (
                <ScreenItem data={data} onClick={onClick} />
            )}
        </Fragment>
    );
}
export default Screen;
