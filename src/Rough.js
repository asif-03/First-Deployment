import React, { Component } from "react"
import { Button, Alert, Breadcrumb, Card, Form, Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import image from './img1.jpg';



class Rough extends Component {

  constructor() {
    super()

  }

  render() {

    return (

      <>
        <Container>
          <div className="container">
            <h2 className="heading">practice Page</h2>
            <br />
            <br />
            <Button>Test Button</Button>
            <br />
            <br />
            <Alert variant="secondary"  >this is a Button</Alert>
            <br />
            <br />
            <Breadcrumb >
              <Breadcrumb.Item>Test1</Breadcrumb.Item>
              <Breadcrumb.Item>Test2</Breadcrumb.Item>
              <Breadcrumb.Item>Test3</Breadcrumb.Item>
            </Breadcrumb>

            <div>
              <Card >
                <Card.Img src={image} alt="head img" />
                <Card.Body>
                  <Card.Title>
                    Card Example
                  </Card.Title>
                  <Card.Text>
                    This is a Example of react bootstrap Card
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

          </div>
        </Container>



      </>


    )
  }



}

export default Rough;