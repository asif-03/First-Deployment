import React, { Component } from "react";
import Question from "./Question";
import Topic from "./Topic";
import { Link } from "react-router-dom";


class HomePage extends Component {

  constructor() {
    super()

  }

  render() {

    console.log(this.props.history)

    return (

      <div className="mainPage">

        <div className="sec-One">
          <Link to="/topic" style={{ textDecoration: 'none' }}>
            <h1 className="text">Topic-Wise Approach</h1>
          </Link>
        </div>

        <div className="sec-Two">
          <Link to="/question" style={{ textDecoration: 'none' }}>
            <h1 className="text">Question-Answer Approach</h1>
          </Link>
        </div>

      </div>

    )

  }

}

export default HomePage