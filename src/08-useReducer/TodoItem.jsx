export const TodoItem = ({ item, onDeleteTodo }) => {

    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="align-self-center">{ item.description }</span>
            <button
                className="btn btn-danger"
                onClick={ () => onDeleteTodo( item.id ) }
            >Borrar</button>
        </li>
    );

}