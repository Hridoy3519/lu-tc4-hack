import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
           <Route path='/' exact >
          <Home></Home>
         </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
    );
<<<<<<< HEAD
  }
=======
}
>>>>>>> ebc3a55a872ca1d234bed8d0b19408354c5acab5

export default App;