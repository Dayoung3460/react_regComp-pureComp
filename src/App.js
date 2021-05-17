import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Parent from "./comp/Parent";

class App extends Component {
  render() {
    return (
        <div className="App">
          <Parent/>
        </div>
    );
  }

}

export default App;

//  pure component는 컴포넌트 안에 값이 업데이트안되면  리렌딩 안됨
