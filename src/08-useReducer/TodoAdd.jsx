import {useRef} from "react";
import {useForm} from "../hooks/index.js";

export const TodoAdd = () => {

    const { formState, onInputChange, description } = useForm({
        id: new Date(),
        description: '',
        done: false
    });

    const onNewTodo = (event) => {

        event.preventDefault();
        console.log(formState);

    }

    return (
        <form>
            <input
                type="text"
                placeholder="¿Qué hay que hacer?"
                className="form-control"
                name="description"
                value={ description }
                onChange={ onInputChange }
            />

            <button
                className="btn btn-outline-primary mt-1"
            >
                Agregar
            </button>
        </form>
    );
}