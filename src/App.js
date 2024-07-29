import React from 'react'
import NavBar from './components/navBar/NavBar';

function App() {
  return (
      <div className="App">
          <NavBar />
          <div className="main">
              deliver food order app
              {/*FIXME: add router dom here  ->HashRouter*/}
          </div>
      </div>
  );
}

export default App;
