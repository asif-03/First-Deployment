import React, { Component } from "react";



class LoginPage extends Component {

  constructor(props) {
    super(props)


    this.state = {

      username: "",
      password: ""


    }

  }

  onChange1 = (e) => {

    this.setState({

      username: e.target.value

    })

  }

  onChange2 = (e) => {

    this.setState({

      password: e.target.value

    })

  }

  logInFunc = async () => {
    if (this.state.username === "a" && this.state.password === "a") {

      await this.props.handleLogin()
      this.props.history.push('/')
    } else {


      alert("Login Unsuccessful")

    }


  }


  checked = () => {

    this.setState({

      isChecked: true

    })


  }


  render() {


    let { isChecked } = this.props

    return (

      <div className="loginPage">

        <h1 className="loginPageHeadText">Authentication Portal</h1>

        <div className="login-Wrapper">

          <input type="text" placeholder="username" value={this.state.username} className="loginBox" onChange={this.onChange1} /><br /><br />
          <input type="password" placeholder="Password" value={this.state.password} className="loginBox" onChange={this.onChange2} /><br />
          <label className="rememberMeLabel">
            <input type="checkbox" value={isChecked} className="rememberMe" onClick={this.checked} /> Remember me
      </label><br />

          <button type="submit" className="loginButton" onClick={this.logInFunc}>Login</button>

        </div>

      </div>



    )

  }


}

export default LoginPage