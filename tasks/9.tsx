import React, { useState } from "react";

// Why extra re-renders in Sub?
const Main = () => {
    const [name] = useState("Ateev");
    const Sub = () => {
        return <h1 className="p-5">Hello {name}!</h1>;
    };
    return (
        <>
            <Sub />
        </>
    );
};
