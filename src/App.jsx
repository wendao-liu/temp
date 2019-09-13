import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './component/header'
import Banner from './component/banner'
import Introduce from './component/introduce'
import Foot from './component/foot'
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Index extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Banner></Banner>
        <Introduce></Introduce>
        <Foot></Foot>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Index} />
    </div>
  );
}

export default App;
