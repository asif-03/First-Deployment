import React, { Component } from 'react';
import './FetchData.css';


class FetchData extends Component {

  constructor(props) {
    super(props)

    this.state = {

      dataBase: [],
      filterDB: [],
      displayData: [],
      searchText: "",
      selectedOption: 'All'


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
      filterDB: temp,
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


  render() {


    return (

      <>
        <header className="header">
          <h3>
            DataBase
          </h3>
          <select className="selection" value={this.state.selectedOption} onChange={(e) => { this.filterStatus(e) }}>filter
            <option value='All'>All</option>
            <option value='True'>True</option>
            <option value='False'>False</option>
          </select>
          <input type="text" className="searchBox" placeholder="Search.." onChange={(e) => { this.filterSearch(e) }}></input>
          <button className="searchButton" onClick={this.resetAll}>Reset</button>
        </header>


        <div class="container" className="dataContainer">

          {this.state.displayData
            .map((data, idx) => (
              <div class="row" key={idx}>
                <div class="col-sm" >{data.id}</div>
                <div class="col-sm" style={{ color: "purple" }}>{data.title}</div>
                <div class="col-sm" style={data.completed === true ? { color: 'green' } : { color: 'red' }}>{data.completed === true ? 'True' : 'False'}</div>

              </div>
            ))}
        </div>


      </>

    )


  }
}


export default FetchData