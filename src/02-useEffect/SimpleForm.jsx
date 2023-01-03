import {useEffect, useState} from "react";

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

    useEffect(() => {
        console.log('UseEffect Change')
    }, [ formState ]);

    useEffect(() => {
        console.log('Email Change')
    }, [ email ]);

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
        </>
    );
}