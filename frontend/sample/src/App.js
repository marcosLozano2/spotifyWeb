import React from 'react';

import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListSongsComponent from './components/ListSongsComponent.jsx';
import HeaderComponent from './components/HeaderComponent';
import CreateSongComponent from './components/CreateSongComponent.jsx';
import ViewSongComponent from './components/ViewSongComponent.jsx';
import LoginComponent from './components/LoginComponent.jsx';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch>
                      <Route path = "/login" component = {LoginComponent}></Route>
                      <Route path = "/" exact component = {ListSongsComponent}></Route>
                      <Route path = "/songs" component = {ListSongsComponent}></Route>
                      <Route path = "/add-song/:id" component = {CreateSongComponent}></Route>
                      <Route path = "/view-song/:id" component = {ViewSongComponent}></Route>
                    </Switch>
                </div>
              
        </Router>
    </div>
    
  );
}
export default App;
