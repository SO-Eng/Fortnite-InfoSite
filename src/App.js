import React from 'react';
import './App.css';
import Nav from './Nav';
import Statistics from './Statistics';
import Upcuming from './Upcoming';
import ItemDetail from './ItemDetail';
import Shop from './Shop';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/statistics" component={Statistics} />
          <Route path="/upcuming" exact component={Upcuming} />
          <Route path="/upcuming/:id" component={ItemDetail}/>
          <Route path="/shop" component={Shop}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)


export default App;
