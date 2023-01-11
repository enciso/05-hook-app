import {useEffect, useReducer} from "react";
import {todoReducer} from "./todoReducer.js";
import {TodoList} from "./TodoList.jsx";
import {TodoAdd} from "./TodoAdd.jsx";

const initialState = [];

const init = () => {

    return JSON.parse( localStorage.getItem('todos') ) || [];

}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer( todoReducer, initialState, init );

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [ todos ]);


    const handleNewTodo = ( todo ) => {

        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action );

    }

    const handleRemoveTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }

    return (
        <>
            <h1>TodoApp (10), <small>pendientes: 2</small></h1>
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