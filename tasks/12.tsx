import React, { useState } from "react";

// List Add and Delete items
const App = () => {
    const [list, setList] = useState([]);

    const changeHandler = () => {};

    const submitHandler = () => {};

    const deleteHandler = () => {}

    return (
        <div className="App">
            <input type="text" />{" "}
            <button>Add</button>
            <hr />
            <ul>
                {list.length > 0 &&
                    list.map((item) => {
                        return <li>{item}</li>;
                    })}
            </ul>
        </div>
    );
};
