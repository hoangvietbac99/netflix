import Screen from "~/parts/Screen/TypeScreen/Screen";
import { Fragment, useEffect, useState } from "react";

function MoviePage({ changeScreen }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchUserData = () => {
            fetch("http://localhost:3001/demo")
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    return setItems(data);
                });
        };
        fetchUserData();
    }, []);
    return (
        <Fragment>
            <Screen data={items} changeScreen={changeScreen} />
        </Fragment>
    );
}
export default MoviePage;
