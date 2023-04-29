import { Fragment } from "react";
import ScreenItem from "./ScreenItem/ScreenItem";
import ScreenList from "./ScreenSlide/ScreenSlide";
function Screen({ changeScreen, data }) {
    return (
        <Fragment>
            {changeScreen === true ? (
                <ScreenList data={data} />
            ) : (
                <ScreenItem data={data} />
            )}
        </Fragment>
    );
}
export default Screen;
