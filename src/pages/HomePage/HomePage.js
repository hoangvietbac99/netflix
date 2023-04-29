import Screen from "~/parts/Screen/TypeScreen/Screen";
import { Fragment } from "react";

function HomePage({ changeScreen }) {
    return (
        <Fragment>
            <Screen changeScreen={true} />
        </Fragment>
    );
}
export default HomePage;
