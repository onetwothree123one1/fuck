import './App.css';
import Nav from './Components/Nav'
import Posts from './Components/Posts'
import Home from './Components/Home'
import Blogs from './Components/Blogs'
import Login from './Components/Login';
import Detail from './Components/DetailBlg';
import Add from './Components/Add';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Router>
     
    
    <Switch>
    
    <Route path="/login">
          <Login />
          </Route>
<div>
    <Nav />
          <Route path="/home">
          <Home />
          </Route>


          <Route path="/posts">
            <Posts />
          </Route>

          <Route path="/blogs" exact>
          <Blogs />
          </Route>

          <Route path="/blogs/:id" >
               <Detail />
          </Route>
          <Route path="/add" >
               <Add />
          </Route>
          </div>      
      </Switch>
      </Router>
      </div>
    );
}

export default App;
