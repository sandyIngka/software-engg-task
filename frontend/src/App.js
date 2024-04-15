import './App.css';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/index'
class App extends Component{
  constructor() {
    super();
  
}

render() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Header/> */}
      <AppRoutes/>
      </BrowserRouter>
    </div>
  );
}
}

export default App;
