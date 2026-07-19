import React, { Component } from 'react';
import Header from './components/header';
import Song from './components/songs';
import './App.css';

class App extends Component {
  componentDidMount() {
    console.log("La app se ha cargado correctamente");
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Song title="Imagine" artist="John Lennon" duration="3:04" />
        <Song title="Billie Jean" artist="Michael Jackson" duration="4:54" />
        <Song title="Bohemian Rhapsody" artist="Queen" duration="5:55" />
      </div>
    );
  }
}

export default App;

