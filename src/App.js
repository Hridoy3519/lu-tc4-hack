import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home/Home";
import AuthProvider from "./contexts/AuthProvider";
import Login from "./Pages/Authentication/Login/Login";
import Register from "./Pages/Authentication/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import BidPage from "./Pages/BidPage/BidPage";
import ScrollToTop from "./Pages/Shared/ScrollToTop/ScrollToTop";
import Auctions from "./Pages/Auctions/Auction";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Payment from "./Pages/Payment/Payment/Payment";

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact>
            <Home></Home>
            <Footer />
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/bidPage/:id">
            <BidPage/>
          </Route>
          <Route path="/auctions">
            <Auctions />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/payment">
            <Payment></Payment>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}
export default App;
