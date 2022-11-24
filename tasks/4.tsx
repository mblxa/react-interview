
// Input values =)
export const Form = ({onSubmit}) => {
    const onSubmit = () => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        onSubmit(email, password)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Email</label>
            <input type={'text'} id={"email"}/>
            <label>Password</label>
            <input type={'password'} id={"password"}/>
            <button type={'submit'}>Login</button>
        </form>
    )
}
