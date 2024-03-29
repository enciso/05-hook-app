import {Navigate, Route, Routes} from "react-router-dom";
import {HomePage} from "./HomePage";
import {LoginPage} from "./LoginPage.jsx";
import {AboutPage} from "./AboutPage.jsx";
import {Navbar} from "./Navbar.jsx";
import {UserProvider} from "./context/UserProvider.jsx";

export const MainApp = () => {
    return (
        <UserProvider>
            <h1>MainApp</h1>
            <Navbar/> 
            <hr />

            <Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route path="login" element={ <LoginPage /> } />
                <Route path="about" element={ <AboutPage /> } />

                {/*<Route path="/*" element={ <LoginPage /> } />*/}

                <Route path="/*" element={ <Navigate to={"/about"} /> } />
            </Routes>
        </UserProvider>
    );
}