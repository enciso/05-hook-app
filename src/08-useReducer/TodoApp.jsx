import {useEffect} from "react";
import {TodoList} from "./TodoList.jsx";
import {TodoAdd} from "./TodoAdd.jsx";
import {useTodo} from "../hooks"

export const TodoApp = () => {

    // useTodo
    // todos,
    const { todos, todosCount, pendingTodosCount, handleRemoveTodo, handleToggleTodo, handleNewTodo } = useTodo();

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [ todos ]);

    return (
        <>
            <h1>TodoApp ({ todosCount }), <small>pendientes: { pendingTodosCount }</small></h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <TodoList
                        todos={ todos }
                        onDeleteTodo={ handleRemoveTodo }
                        onToggleTodo={ handleToggleTodo }
                    />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr/>

                    <TodoAdd onNewTodo={ handleNewTodo } />
                </div>
            </div>
        </>
    );
}