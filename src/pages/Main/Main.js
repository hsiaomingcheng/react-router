import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import React, {Suspense} from "react";
import {useAuth} from '../../context';
import {routes} from "../../route";

const loginPage = {
    name: '登入頁',
    path: '/login',
    component: React.lazy(() =>
        import(
            /*webpackChunkName:"LoginPage"*/ /*webpackMode:"lazy"*/ '../LoginPage/LoginPage'
        )
    ),
};

// location帶有四個參數可以使用
// pathname、search、hash、state

export default function Main() {
    let auth = useAuth();

    return (
        <Suspense fallback={<h1>Loading profile...</h1>}>
            <Router>
                <Switch>
                    <Route
                        path="/login"
                        render={() =>
                            !auth.user ?
                                <loginPage.component/>
                                :
                                <Redirect
                                    to={{
                                        pathname: "/"
                                    }}
                                />}
                    />
                    {
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
                    }
                </Switch>
            </Router>
        </Suspense>
    );
}