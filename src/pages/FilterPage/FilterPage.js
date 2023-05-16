import Screen from "~/parts/Screen/TypeScreen/Screen";
import { useState, useEffect } from "react";
function FilterPage({ onClick }) {
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
        <div>
            <Screen data={items} changeScreen={false} onClick={onClick} />
        </div>
    );
}

export default FilterPage;
