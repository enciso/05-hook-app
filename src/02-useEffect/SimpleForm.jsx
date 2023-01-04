import {useEffect, useState} from "react";
import {Message} from "./Message.jsx";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'aencisof',
        email: 'aencisof@hotmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

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

            {
                username === 'aencisof2' && <Message />
            }

            <input
                className="form-control mt-2"
                type="email"
                placeholder="aencisof@hotmail.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />
        </>
    );
}