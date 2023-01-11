import {TodoItem} from "./TodoItem.jsx";

export const TodoList = ( { todos = [], onDeleteTodo } ) => {

    return (
        <ul className="list-group">
            {
                todos.map( todo => (
                    <TodoItem key={ todo.id } item={ todo } onDeleteTodo={ onDeleteTodo } />
                ))
            }
        </ul>
    );

}