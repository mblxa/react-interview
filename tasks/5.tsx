import {useRef} from "react";

// Input values V2
export const Form = ({onSubmit}) => {
    const email = useRef()
    const password = useRef()

    const onSubmit = () => {
        onSubmit(email.current?.value, password.current?.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Email</label>
            <input type={'text'} id={"email"} ref={email}/>
            <label>Password</label>
            <input type={'password'} id={"password"} ref={password}/>
            <button type={'submit'}>Login</button>
        </form>
    )
}
