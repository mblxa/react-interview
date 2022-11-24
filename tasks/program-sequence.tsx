import React, { useEffect, useState } from "react";

/**
 * Write a functional component that renders five buttons,
 * a list displaying the user’s program, a form to accept
 * a starting value, and the result of running the program on said value.
 * The first four buttons are numeric operations
 * that the user may add to their program sequence
 * (half, double, increment, decrement),
 * and the corresponding functions are provided in the starter code.
 * When a button is pressed, its operation should be added to the end of the user’s program.
 */
function App() {
    return <CustomProgram />;
}

const half = (number) => number / 2;
const double = (number) => number * 2;
const increment = (number) => number + 1;
const decrement = (number) => number - 1;

const CustomProgram = () => {
    // YOUR CODE HERE
};

export default App;
