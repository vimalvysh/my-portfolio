import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import { useSpring, animated } from "react-spring";

class Home extends Component {
  state = {
    modal: false,
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  };

  componentDidMount() {
    this.props = useSpring({
      from: { opacity: 0, marginRight: -400 },
      to: { opacity: 1, marginRight: 0 },
      delay: 1000
    });
  }

  onchange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <animated.div style={this.props}>
        <Container className="">
          <Row>
            <Col sm="8" xs="7" className="info mt-2  ">
              <h2 className="text-right">Meticulous Mind for SUCCESS</h2>
              <Row>
                <Col sm="8" xs="12">
                  <p className="portfolio-description">
                    Young energetic freak from God's Own Country. Professionally
                    an Engineer and by action Software Developer.
                  </p>
                  <button
                    type="submit"
                    className="btn btn-sm btn-info"
                    onClick={this.toggle}
                  >
                    Contact Me
                  </button>
                  {/* <ContactModal
                    modal={modal}
                    toggle={() => this.toggle()}
                    // mailSend={mailSend}
                  ></ContactModal> */}
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
      </animated.div>
    );
  }
}

export default Home;
