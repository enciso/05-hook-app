import {useForm} from "../hooks/index.js";

export const TodoAdd = ({ onNewTodo }) => {

    const { onResetForm, onInputChange, description } = useForm({
        description: ''
    });

    const onFormSubmit = ( event ) => {
        event.preventDefault();

        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description
        }

        onNewTodo(newTodo);
        onResetForm();
    }

    return (
        <form onSubmit={ onFormSubmit }>
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