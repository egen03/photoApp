import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home';
import Profile from './Components/Profile';
import Bookmark from './Components/Bookmark';
import Login from './Components/Login';

function App() {
  return (
    <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Food4Thought</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link to="/home" className="nav-link" >Home</Link>
      <Link to="/profile" className="nav-link" >Profiles</Link>
      <Link to="/bookmark" className="nav-link" >Bookmarks</Link>
      <Link to="/login" className="nav-link" >Log In</Link>

    </div>
  </div>
</nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/bookmark">
            <Bookmark />
          </Route> 
          <Route path="/Login">
            <Login />
          </Route> 
        </Switch> 
      </div>
    </Router>
  );
}


export default App;