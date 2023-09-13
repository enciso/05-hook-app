import {todoReducer} from "../../src/08-useReducer/todoReducer";
import {act} from "@testing-library/react";

describe('Pruebas en todoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Test Todo',
        done: false
    }];

    test('debe de regresar el estado inicial', () => {

        const newState = todoReducer( initialState, {} );

        expect( newState ).toBe( initialState );


    });

    test('debe agregar un Todo', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        };

        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe(2);
        expect( newState ).toContain( action.payload );

    });

    test('debe eliminar un Todo', () => {

        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        };

        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe(0);

    });

    test('debe de realizar el toggle de Todo', () => {

        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        };

        const newState = todoReducer( initialState, action );
        expect( newState[0].done ).toBeTruthy();

    });


});