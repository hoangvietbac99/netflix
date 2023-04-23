import { Fragment } from "react"
import Screen from "~/parts/Screen/Screen"

function TVShow({changeScreen}){
    return (
        <Fragment>
            <Screen changeScreen={changeScreen}/>
        </Fragment>
    )
}
export default TVShow