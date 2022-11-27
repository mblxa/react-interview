import {useRef, useState} from "react";

// Implement reset of the form values
const Input = ({value, onChange}) => {
    return <input value={value} onChange={(e) => onChange(e.target.value)} />
}

export const App = () => {
    const formValues = useSelector(selectProfile);

    return (
        <Form initialValues={formValues} onReset={}/>
    )
}

export const Form = ({initialValues, onReset}) => {
    const [values, setValues] = useState(initialValues);

    return (
        <form>
            <Input
                value={values.email}
                onChange={(newValue) =>
                    setValues({...values, email: newValue})
                }
            />
            <Input
                value={values.password}
                onChange={(newValue) =>
                    setValues({...values, password: newValue})
                }
            />
            <button onClick={onReset}>Reset</button>
        </form>
    )
}
