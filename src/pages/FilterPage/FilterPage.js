import Screen from "~/parts/Screen/TypeScreen/Screen";
import { useState, useEffect } from "react";
function FilterPage() {
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
        <div>
            <Screen data={items} changeScreen={false} />
        </div>
    );
}

export default FilterPage;
