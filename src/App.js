import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {ProvideAuth} from './context';
import LoginPage from './pages/LoginPage/LoginPage';
import Main from './pages/Main/Main';

function App() {
  return (
    <div className="App">
      <ProvideAuth>
        <Router>
          <Switch>
            <Route path="/login">
              <LoginPage/>
            </Route>
            <Main/>
          </Switch>
        </Router>
      </ProvideAuth>
    </div>
  );
}

export default App;
