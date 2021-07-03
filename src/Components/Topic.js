import React, { Component } from "react";
import { Link } from "react-router-dom"

class Topic extends Component {


  render() {

    console.log(this.props.history)
    return (


      <div className="tMainPage">

        <h1>Important Topics</h1>

        <div className="topicsContainer">

          <div className="section"> <Link to="/topic/javascript" style={{ textDecoration: 'none' }}>
            <h1 className="sectionText">JavaScript</h1>
          </Link ></div>

          <div className="section"> <Link to="/topic/reactjs" style={{ textDecoration: 'none' }}>
            <h1 className="sectionText">React JS</h1>
          </Link></div>

          <div className="section"> <Link to="/topic/html" style={{ textDecoration: 'none' }}>
            <h1 className="sectionText">Html</h1>
          </Link></div>

          <div className="section"> <Link to="/topic/css" style={{ textDecoration: 'none' }}>
            <h1 className="sectionText">css</h1>
          </Link></div>
        </div>



      </div>


    )


  }

}

export default Topic;