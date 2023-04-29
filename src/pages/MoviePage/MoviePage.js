import Screen from "~/parts/Screen/TypeScreen/Screen";
import { Fragment } from "react";

function MoviePage({ changeScreen }) {
    return (
        <Fragment>
            <Screen changeScreen={changeScreen} />
        </Fragment>
    );
}
export default MoviePage;
