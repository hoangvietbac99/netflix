
import { Fragment } from "react"
import ScreenList from "./ScreenList/ScreenList"
import ScreenItem from "./ScreenItem/ScreenItem"

function Screen ({changeScreen, data}){
    return (
        <Fragment>
            { changeScreen === true ? <ScreenList data={data} /> : <ScreenItem data={data} />}
        </Fragment>
    )
}
export default Screen





