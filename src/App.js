import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { pages } from "./pages/routers/routers";
import { useState } from "react";
import Modal from "./component/Modal/Modal";
function App() {
    //// state
    const [typeScreen, setTypeScreen] = useState(true);
    const [md, setMd] = useState(false);
    const [idMovie, setIdMovie] = useState();
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };
    const handleShowMd = (id) => {
        setMd(true);
        setIdMovie(id);
    };
    const handleHideMd = () => {
        setMd(false);
    };
    const handleTypeScreen = (type, id) => {
        switch (type) {
            case "type":
                setTypeScreen(!typeScreen);
                break;
            case "modal":
                setMd(true);
                setIdMovie(id);
                break;
            default:
                return;
        }
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
                                            idMovie={idMovie}
                                            subNav={subNav}
                                            onClick={(type, id) =>
                                                handleTypeScreen(type, id)
                                            }
                                        >
                                            <Page
                                                typeScreen={typeScreen}
                                                onClick={(id) =>
                                                    handleShowMd(id)
                                                }
                                            />
                                            {md && (
                                                <Modal
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
