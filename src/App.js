import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'></Route>
          <Route exact path='/projects'></Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
