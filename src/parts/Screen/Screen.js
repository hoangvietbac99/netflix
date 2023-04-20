
import MainScreen from "./MainScreen/MainScreen"
import SubScreen from "./SubScreen/SubScreen"

function Screen ({showScreen}){
 
    return (
        <div>
            { showScreen === true ? <MainScreen /> : <SubScreen/>}
        </div>
    )
}
export default Screen