import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';


//import component
import Header from './Components/headerComponents/header';
import AuthComponent from './Components/authComponents/authComponent';
import UiComponents from './Components/uiComponents/uiComponent';
import AppComponent from './Components/appComponents/appComponent';
import BasicLogin from'./Components/authComponents/basicLogin'



export class App extends Component {
  render() {
    return (
      <div className="pb-5">
        {/* <Header></Header>
        <AuthComponent></AuthComponent>
        <UiComponents></UiComponents>
        <AppComponent></AppComponent> */}
        <BasicLogin></BasicLogin>
      </div>
    );
  }
}

export default App;
