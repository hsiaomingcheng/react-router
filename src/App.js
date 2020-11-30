import React from "react";
import {ProvideAuth} from './context';
import Main from './pages/Main/Main';

function App() {
  return (
    <div className="App">
      <ProvideAuth>
        <Main/>
      </ProvideAuth>
    </div>
  );
}

export default App;
