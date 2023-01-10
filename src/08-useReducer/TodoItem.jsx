export const TodoItem = ({ item }) => {

    return (
        <li key={ item.id } className="list-group-item d-flex justify-content-between">
            <span className="align-self-center">{ item.description }</span>
            <button className="btn btn-danger">Borrar</button>
        </li>
    );

}