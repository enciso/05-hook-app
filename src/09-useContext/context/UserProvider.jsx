import {UserContext} from "./UserContext.jsx";

const user = {
    id: 123,
    name: 'Alejandro Enciso',
    email: 'alejandro.encisof@gmail.com'
}

export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={{ hola: 'Huevos', user }}>
            { children }
        </UserContext.Provider>
    );
}