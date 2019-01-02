import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Customers from "./components/customers.jsx";
import Movies from "./components/movies.jsx";
import Rental from "./components/rental.jsx";
import NotFound from "./components/notFound.jsx";
import NavigationBar from "./components/common/navigationBar";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <main className="content">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/customers" component={Customers} />
            <Route path="/rental" component={Rental} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/movies" component={Movies} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
