import React from "react";
import { Container, Row, Col } from "reactstrap";

import { useSpring, animated } from "react-spring";

export default function Home() {
  const props = useSpring({
    from: { opacity: 0, marginRight: -400 },
    to: { opacity: 1, marginRight: 0 },
    delay: 1000
  });
  return (
    <animated.div style={props}>
      <Container className="">
        <Row>
          <Col sm="8" xs="12" className="info mt-2  ">
            <h3 className="text-right">Meticulous Mind for SUCCESS</h3>
            <Row>
              <Col sm="8" xs="10">
                <p>
                  Young energytic champ form God's Own Country.Proffesionaly
                  I'am an Engineer and by action I'm a Software Developer.
                </p>
              </Col>
            </Row>
          </Col>
          <Col sm="4" xs="12" className="mt-2  ">
            <img
              className="img "
              src={require("../img/vimal-home.jpg")}
              alt="No home for vimal"
            />
          </Col>
        </Row>
      </Container>
    </animated.div>
  );
}
