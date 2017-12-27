import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    {/*we create a {color:'green'} to fill condition of inner bracket from {{color}} */}
    let name = 'Daniel';
    let green = 'green';
    let headerStyle = {color:green, 'font-size':'50px'};
    return (

      <div className="App">
        <h1>Title</h1>
        <header className="App-header">
      {/* jsx html - upload XML syntax to JS */}
          <img src={logo} className="App-logo" alt="logo" />
          {/* pass objs to style 
          first {} creates a space for JS,
          second {} is the JS
          , thus we just need color from color: color, because REACT figures out "oh this is css prop, let me give you the color proscribed"*/}
          <h1 style={headerStyle}>HELLO {name}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
