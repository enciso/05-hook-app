import {useReducer} from "react";
import {todoReducer} from "./todoReducer.js";
import {TodoList} from "./TodoList.jsx";
import {TodoAdd} from "./TodoAdd.jsx";

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar las cajas madre',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra filosofal',
        done: false,
    }
];

export const TodoApp = () => {

    const [todos, dispatch] = useReducer( todoReducer, initialState );

    const handleNewTodo = ( todo ) => {
        console.log({ todo });
    }

    return (
        <>
            <h1>TodoApp (10), <small>pendientes: 2</small></h1>
            <hr/>

            <div className="row">
                <div className="col-5">

                    {/* TodoList */}
                    <TodoList todos={ todos } />
                    {/* TodoList */}
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr/>

                    {/* TodoAdd onNewTodo( todo ) */}
                    {/* { id: new Date, description: input, done:false } */}
                    {/* TODO: Falto utilizar el handleNewTodo */}
                    <TodoAdd />
                    {/* TodoAdd */}
                </div>
            </div>
        </>
    );
}