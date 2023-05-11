import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { pages } from "./pages/routers/routers";
import { useState } from "react";

function App() {
    const [changeScreen, setChangeScreen] = useState(true);
    const handleChangeScreen = () => {
        setChangeScreen(!changeScreen);
    };
    return (
        <div>
            <Router>
                <div className="App">
                    <Routes>
                        {pages.map((route, index) => {
                            const Page = route.component;
                            let Layout = route.layout;
                            let subNav = null;
                            if (route.subNav === true) {
                                subNav = true;
                            } else if (route.subNav === false) {
                                subNav = false;
                            }

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout
                                            subNav={subNav}
                                            onClick={() => handleChangeScreen()}
                                        >
                                            <Page changeScreen={changeScreen} />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </div>
            </Router>
        </div>
    );
}
export default App;
