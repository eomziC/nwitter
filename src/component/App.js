import AppRouter from "component/Router";
import { useState, useEffect } from "react";
import { authService } from "fbase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
    const [init, setInit] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userObj, setUserObj] = useState(null);
    useEffect(()=> {
        authService.onAuthStateChanged((user) => {
            if (user) {
                setUserObj(user);
            }
            setInit(true);
        });
    }, [])
    return (
        <>
            {init ? <AppRouter isLoggedIn={Boolean(userObj)} userObj={userObj} /> : "Initializing..."}
            <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
        </>
    );
}

export default App;
