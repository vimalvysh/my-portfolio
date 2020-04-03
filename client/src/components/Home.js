import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col, Alert } from "reactstrap";

import { Spring } from "react-spring/renderprops";

import ContactModal from "./ContactModal";

class Home extends Component {
  state = {
    modal: false,
    mesgSendAlert: false,
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  };

  onChange = e => {
    console.log("name:", [e.target.name]);
    console.log("value:", e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  mesgAlertonDismiss = () => {
    this.setState({
      mesgSendAlert: !this.state.mesgSendAlert
    });
  };

  mailSend = () => {
    console.log(this.state);
    const messageObj = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      message: this.state.message
    };
    axios.post("/contact/emailSend", messageObj).then(res => {
      this.toggle();
      this.mesgAlertonDismiss();
    });
  };

  render() {
    return (
      <Spring
        from={{ opacity: 0, marginRight: -400 }}
        to={{ opacity: 1, marginRight: 0 }}
        delay={1000}
      >
        {props => (
          <div style={props}>
            <Container className="">
              <Row>
                <Col sm="8" xs="7" className="info mt-2  ">
                  <h2 className="text-right">Meticulous Mind for SUCCESS</h2>
                  <Row>
                    <Col sm="8" xs="12">
                      <p className="portfolio-description">
                        Young energetic freak from God's Own Country.
                        Professionally an Engineer and by action Software
                        Developer.
                      </p>
                      <Alert
                        color="success"
                        isOpen={this.state.mesgSendAlert}
                        toggle={this.mesgAlertonDismiss}
                      >
                        Message Send
                      </Alert>
                      <button
                        type="submit"
                        className="btn btn-sm btn-info"
                        onClick={this.toggle}
                      >
                        Contact Me
                      </button>
                      <ContactModal
                        modal={this.state.modal}
                        toggle={this.toggle}
                        mailSend={this.mailSend}
                        onChange={this.onChange}
                      ></ContactModal>

                      <p
                        className="portfolio-description"
                        style={{ color: "tomato" }}
                      >
                        NOTE: Portfolio Under Construction
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col sm="4" xs="5" className="mt-2  ">
                  <img
                    className="img "
                    src={require("../img/vimal-home.png")}
                    alt="No home for vimal"
                  />
                </Col>
              </Row>
            </Container>
          </div>
        )}
      </Spring>
    );
  }
}

export default Home;
