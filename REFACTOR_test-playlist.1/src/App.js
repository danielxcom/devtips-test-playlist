import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
{/* remember the return () are needed given the <div> alone wont be counted
if there was a line-break */}

let defaultTextColor = '#fff';
let defaultStyle = {
  color: defaultTextColor
}

class Aggregate extends Component {
  render() { {/*render method on aggregate class*/}
  return (
    <div style={{...defaultStyle, width: '40%', display: 'inline-block'}} className='aggregate'>
      <h2>Numbered-Text</h2>
    </div>
    );
  };
}

class Filter extends Component {
  render() {
    return (
      <div style={{defaultStyle}}>
      <p style={{defaultStyle}}>Filter Placeholder</p>
      <img/>
        <input type='text' />
         
      </div>
      ); 
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{...defaultStyle, display: 'inline-block',width: '25%'}}>
        {/* Avoid width conflicts, welds on the defaultStyle */}
        <img />
        <h3> Playlist Name </h3>
        <ul><li>Song-1</li><li>Song-2</li><li>Song-3</li></ul>
      </div>
      );
  }
}

class App extends Component {
  render() {
    {/*we create a {color:'green'} to fill condition of inner bracket from {{color}} */}
    
    return (

      <div className="App">
        <h1  style={{...defaultStyle}}>Title</h1>
        <Aggregate/>
        <Aggregate/>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
      </div>
    );
  }
}

export default App;
