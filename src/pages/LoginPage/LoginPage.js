import {useLocation, useHistory} from "react-router-dom";
import {useAuth} from "../../context";
import React, {useEffect} from "react";

export default function LoginPage() {
    let history = useHistory();
    let location = useLocation();
    const auth = useAuth();

    let {from} = location.state || {from: {pathname: "/"}};

    function handleLogIn() {
        auth.toggleUser();
        history.replace('/');
    }

    useEffect(() => {
        if (auth.user) {
            history.replace('/');
        }
    }, [auth.user, history]);

    return (
        <div>
            <p>You must log in to view the page at {from.pathname}</p>
            <button onClick={handleLogIn}>登入 - Log in</button>
        </div>
    );
}