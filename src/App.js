import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import About from './components/About/About';
import Home from './components/Home/Home';
import Faculties from './components/Faculties/Faculties';
import Service from './components/Service/Service';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/faculties">
            <Faculties></Faculties>
          </Route>
          <Route path="/service">
            <Service></Service>
          </Route>
          <Route exact path="/">
           <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
