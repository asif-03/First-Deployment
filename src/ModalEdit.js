
import React, { Component } from 'react';
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';


class ModalEdit extends Component {

  constructor(props) {

    super(props)

    console.log(this.props)

    this.state = {

      title: this.props.modalData.title,
      status: this.props.modalData.completed === false ? "False" : "True",
      isSelected: ''
    }


  }


  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (nextProps != pre)
      this.state = {
        title: nextProps.modalData.title,
        status: nextProps.modalData.completed === false ? "False" : "True",
        isSelected: ''
      }
  }



  handleText = (e) => {

    this.setState({

      title: e.target.value

    })
  }

  handleStatus = (e) => {

    this.setState({
      status: e.target.value

    })

  }






  render() {


    let editedTitle = this.state.title
    let editedStatus = this.state.status


    return (

      <>

        <Modal className="editModal" isOpen={this.props.isEditing}>

          <label className="titleLabel">Title</label>
          <input className="modalTextBox" value={this.state.title} onChange={(e) => this.handleText(e)}></input>

          <select className="modalSelection" value={this.state.status} onChange={(e) => { this.handleStatus(e) }} >
            <option value="False">{this.props.modalData.completed === true ? "True" : "False"}</option>
            <option value="true">{this.state.status === true ? "Flase" : "True"}</option>
            <option value="Status">Pending</option>
          </select>

          <div >
            <Button variant="danger" className="modalCloseBtn" onClick={this.props.closeModal}>Close</Button>
            <Button variant="success" className="modalSaveBtn" onClick={(editedTitle, editedStatus) => { this.props.saveModalDetails(editedTitle, editedStatus) }} >Save</Button>
          </div>

        </Modal>

      </>

    )


  }


}

export default ModalEdit
