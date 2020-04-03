import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.scss';
import Home from "./layout/Home/index.jsx";
import NavBar from "./layout/NavBar/index.jsx";
import SideBar from "./layout/SideBar/index.jsx";

class App extends React.Component {
  render() {
    return(
      <div id="wrapper">
        <NavBar/>
        <Home/>
        <SideBar/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
