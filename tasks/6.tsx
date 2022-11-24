import {useRef, useState} from "react";

// Implement reset of the form values
const Input = ({value, onChange}) => {
    return <input value={value} onChange={(e) => onChange(e.target.value)} />
}

export const Form = ({initialValues}) => {
    const [values, setValues] = useState(initialValues);
    const handleReset = () => {

    }

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
            <button onClick={handleReset}>Reset</button>
        </form>
    )
}
