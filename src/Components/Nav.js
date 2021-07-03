import React, { Component } from "react";






class Nav extends Component {

  constructor(props) {
    super(props)


  }




  logOutFunc = () => {

    this.props.handleLogOut()



  }


  goBackFunc = () => {

    this.props.history.push('/')


  }




  render() {

    return (

      < nav >
        <button className="backBtn" style={this.props.isLoggedIn ? { display: 'block' } : { display: 'none' }} onClick={this.goBackFunc}>&#8678;</button>
        <h1 className="headText" style={this.props.isLoggedIn ? { left: '2%' } : { left: '0%' }}>React JavaScript</h1>
        <button className="logOutBtn" style={this.props.isLoggedIn ? { display: 'block' } : { display: 'none' }} onClick={this.logOutFunc}>LogOut</button>


      </nav >

    )


  }
}

export default Nav;