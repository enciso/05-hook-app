import {useForm} from "../hooks/useForm.js";

export const FormWithCustomHook = () => {

    const { formState, onInputChange, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const { username, email, password } = formState;



    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
            <input
                className="form-control"
                type="text"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />

            <input
                className="form-control mt-2"
                type="email"
                placeholder="aencisof@hotmail.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />

            <input
                className="form-control mt-2"
                type="password"
                placeholder="Contraseña"
                name="password"
                value={ password }
                onChange={ onInputChange }
            />
        </>
    );
}