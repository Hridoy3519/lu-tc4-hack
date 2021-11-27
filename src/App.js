import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact >
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
