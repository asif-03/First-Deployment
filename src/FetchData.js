import React, { Component } from 'react';
import './FetchData.css';
import * as ReactBootStrap from "react-bootstrap";


class FetchData extends Component {

  constructor(props) {
    super(props)

    this.state = {

      dataBase: [],
      filterDB: [],
      displayData: [],
      searchText: "",
      selectedOption: 'All',
      isEditing: false


    }

  }


  async componentDidMount() {

    const url = "https://jsonplaceholder.typicode.com/users/1/todos";
    const response = await fetch(url);
    const result = await response.json()
    console.log(result)

    this.setState({
      dataBase: result,
      filterDB: result,
      displayData: result

    })


  }




  filterStatus = (e) => {
    let input = e.target.value;

    let temp = this.state.filterDB.filter((value) => {

      if (input === "True" && value.completed === true) {

        console.log(value)
        return value

      }

      if (input === "False" && value.completed === false) {

        return value
      }
      if (input === "All") {
        return value
      }

    })
    this.setState({
      displayData: temp,
      selectedOption: input

    })
  }


  filterSearch = (e) => {

    let input = e.target.value;
    let temp = this.state.filterDB.filter((value) => {

      if (input === "") {
        return value
      }
      if (value.title.includes(input)) {
        return value
      }

    });

    this.setState({
      displayData: temp,
      searchText: input
    })
  }



  resetAll = () => {

    this.setState({

      displayData: this.state.dataBase,
      searchText: "",
      selectedOption: "All"

    })

  }

  editFunc = () => {


    this.setState({
      isEditing: !this.state.isEditing
    })

  }


  renderData = (data, idx) => {

    return (

      <tr key={idx}>
        <td>{data.id}</td>
        <td>{data.title}</td>
        <td style={data.completed === true ? { color: 'green' } : { color: 'red' }}>{data.completed === true ? 'True' : 'False'}</td>
        <td><button onClick={this.editFunc()} >Edit</button></td>
        <td><button>Delete</button></td>
      </tr>

    )

  }



  render() {


    return (

      <>
        <header className="header">
          <h3 className="headerText">
            DataBase
          </h3>
          <select className="selection" value={this.state.selectedOption} onChange={(e) => { this.filterStatus(e) }}>filter
            <option value='All'>All</option>
            <option value='True'>True</option>
            <option value='False'>False</option>
          </select>
          <input type="text" className="searchBox" placeholder="Search.." onChange={(e) => { this.filterSearch(e) }}></input>
          <button className="resetButton" onClick={this.resetAll}>Reset</button>
        </header>

        <div>
          <ReactBootStrap.Table striped bordered hover >
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Status</th>
                <th>Update</th>
                <th></th>
              </tr>
            </thead>
            <tbody>

              {this.state.displayData.map(this.renderData)}

            </tbody>
          </ReactBootStrap.Table>
        </div>


      </>

    )


  }
}


export default FetchData