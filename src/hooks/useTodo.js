import {todoReducer} from "../08-useReducer/todoReducer.js";
import {useReducer} from "react";

const init = () => {

    return JSON.parse( localStorage.getItem('todos') ) || [];

}

export const useTodo = () => {

    const [todos, dispatch] = useReducer( todoReducer, [], init );

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

    return {
        todos,
        handleNewTodo,
        handleToggleTodo,
        handleRemoveTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter( todo => !todo.done ).length
    }

}