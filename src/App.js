import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <Link to="/home" className="nav-link" >Home</Link>
      <Link to="/profile" className="nav-link" >Profiles</Link>
      <Link to="/bookmark" className="nav-link" >Bookmarks</Link>
    </div>
  </div>
</nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          {/* <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/bookmark">
            <Bookmark />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}


export default App;