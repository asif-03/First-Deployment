import React, { Component } from "react"
import './App.css';
import Nav from "./Components/Nav"
import HomePage from "./Components/HomePage";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Question from "./Components/Question";
import Topic from "./Components/Topic";
import LoginPage from "./Components/LoginPage"
import AuthRoute from "./Components/AuthRoute"
import JavaScript from "./Components/JavaScript";





class App extends Component {

  constructor(props) {
    super(props)


    this.state = {

      isLoggedIn: false,
      rememberMe: false,
      isChecked: false

    }

  }

  handleLogin = () => {

    this.setState({

      isLoggedIn: true
    })


  }

  handleLogOut = () => {

    this.setState({

      isLoggedIn: false
    })


  }



  render() {


    return (


      <div className="App">

        <Nav isLoggedIn={this.state.isLoggedIn} handleLogOut={this.handleLogOut} />

        <Router>
          <Switch>
            <Route exact path="/login" render={(props) => <LoginPage handleLogin={this.handleLogin} {...props} />} />

            <AuthRoute isLoggedIn={this.state.isLoggedIn}>

              <Route exact path="/" component={HomePage} />
              <Route exact path="/question" component={Question} />
              <Route exact path="/topic" component={Topic} />
              <Route exact path="/topic/javascript" component={JavaScript} />

            </AuthRoute>


          </Switch>
        </Router>

      </div>

    );
  }
}

export default App;
