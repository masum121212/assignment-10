import './App.css';
import Home from './Pages/HomePage/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import ServiceDetails from './Pages/Details/ServiceDetails/ServiceDetails';
import Login from './Pages/LoginPage/Login/Login';
import Header from './Pages/Shared/Header/Header';
import Services from './Pages/ServiceItems/Services/Services';
import Doctors from './Pages/DoctorPage/Doctors/Doctors';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/LoginPage/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/serviceDetails/:serviceId">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
      {/* <Home></Home>
      <Services></Services>
      <Doctors></Doctors> */}
    </div>
  );
}

export default App;
