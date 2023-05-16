import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { pages } from "./pages/routers/routers";
import { useState } from "react";
import ModalTrailer from "./component/Modal/Modal";

function App() {
    const [changeScreen, setChangeScreen] = useState(true);
    const [md, setMd] = useState(false);
    const [idMovie, setIdMovie] = useState();
    const handleShowMd = (id) => {
        setMd(true);
        setIdMovie(id);
    };
    const handleHideMd = () => {
        setMd(false);
    };
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
                                            <Page
                                                changeScreen={changeScreen}
                                                onClick={(id) =>
                                                    handleShowMd(id)
                                                }
                                            />
                                            {md && (
                                                <ModalTrailer
                                                    idMovie={idMovie}
                                                    onClick={() =>
                                                        handleHideMd()
                                                    }
                                                />
                                            )}
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
