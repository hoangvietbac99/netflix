import Screen from "~/parts/Screen/TypeScreen/Screen";
import { Fragment, useEffect, useState } from "react";

function HomePage({ onClick }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchUserData = () => {
            fetch("http://localhost:3001/movies")
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
            <Screen data={items} changeScreen={true} onClick={onClick} />
        </Fragment>
    );
}
export default HomePage;
