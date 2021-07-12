import React, { Component } from 'react';
import './FetchData.css';
import * as ReactBootStrap from "react-bootstrap";
import { Button } from 'react-bootstrap';
import ModalEdit from './ModalEdit';


class FetchData extends Component {

  constructor(props) {
    super(props)


    this.state = {

      dataBase: [],
      filterDB: [],
      modalDataBase: [],
      displayData: [],
      searchText: "",
      selectedOption: 'All',
      isEditing: false,
      requiredItem: 0


    }

  }


  async componentDidMount() {
    console.log('prateek')

    const url = "https://jsonplaceholder.typicode.com/users/1/todos";
    const response = await fetch(url);
    const result = await response.json()

    console.log(result)

    this.setState({
      dataBase: result,
      filterDB: result,
      modalDataBase: result,
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

  openModal = (idx) => {

    console.log("index number is " + idx)
    this.setState({
      isEditing: !this.state.isEditing,
      requiredItem: idx
    })



  }


  saveModalDetails = (editedTitle, editedStatus) => {

    let idx = this.state.requiredItem;
    let temp = this.state.dataBase;
    temp[idx].title = editedTitle
    temp[idx].completed = temp[idx].completed.toString() === editedStatus ? temp[idx].completed : !temp[idx].completed


    console.log(temp[idx].completed.toString())
    console.log(!temp[idx].completed.toString())
    console.log(temp)

    this.setState({

      filterDB: temp,
      displayData: temp,
      isEditing: !this.state.isEditing


    })

  }

  deleteItem = (idx) => {


    let temp = this.state.dataBase;
    temp.splice(idx, 1)

    this.setState({


      filterDB: temp,
      displayData: temp


    })



  }



  closeModal = () => {

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
        <td><Button onClick={() => this.openModal(idx)} >Edit</Button></td>
        <td><Button variant="danger" onClick={(idx) => { this.deleteItem(idx) }}>Delete</Button></td>
      </tr>

    )

  }



  render() {


    let requiredItem = this.state.requiredItem
    let modalData = this.state.dataBase[requiredItem]
    let saveModalDetails = this.saveModalDetails
    console.log(this.state.dataBase)





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
          <Button className="resetButton" onClick={this.resetAll}>Reset</Button>
        </header>

        <div >
          {
            modalData ? < ModalEdit isEditing={this.state.isEditing} closeModal={this.closeModal} modalData={modalData} saveModalDetails={this.saveModalDetails} modalDataBase={this.state.modalDataBase} />
              : <></>
          }


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