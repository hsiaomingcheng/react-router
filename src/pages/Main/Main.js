import {Redirect, Route} from "react-router-dom";
import React from "react";
import {useAuth} from '../../context';
import {routes} from "../../route";

// location帶有四個參數可以使用
// pathname、search、hash、state

export default function Main() {
    let auth = useAuth();

    return (
        routes.map((e, index) => {
            return <Route
                key={index}
                path={e.path}
                exact={e.exact}
                render={({location}) =>
                    auth.user ? (
                        <e.component/>
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: {from: location}
                            }}
                        />
                    )
                }
            />
        })
    );
}