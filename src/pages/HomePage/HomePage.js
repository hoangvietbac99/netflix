import Screen from "~/parts/Screen/Screen";
import { Fragment } from "react";

function HomePage({changeScreen}){

    return (
    <Fragment>
        <Screen changeScreen={changeScreen} />
    </Fragment>
    )
}
export default HomePage
;