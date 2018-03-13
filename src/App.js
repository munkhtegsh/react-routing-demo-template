import React, { Component } from 'react';
import './App.css';
import routes from  './Routes';
//Everything form react-router-dom needs to be nested in the HashRouter component tags
class App extends Component {
  render() {
    return (
      <div className="App">
        { routes }                 {/* you can call it from routes like this */}
      </div>
    );
  }
}

export default App;
