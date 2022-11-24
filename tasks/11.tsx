import {useState} from "react";

// Changing values of the parent: Redux, Context, Render props.

const Modal = ({children}) => {
    const [visible, setIsVisible] = useState(false);
    if (!visible) return null;

    return (<div>{children}</div>)
}

const App = () => {
    return (
        <Modal>
            <button>Hide modal</button>
        </Modal>
    );
};
