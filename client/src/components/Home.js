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
          <Col sm="8" xs="7" className="info mt-2  ">
            <h2 className="text-right">Meticulous Mind for SUCCESS</h2>
            <Row>
              <Col sm="8" xs="12">
                <p className="portfolio-description">
                  Young energetic freak from God's Own Country. Professionally
                  an Engineer and by action Software Developer.
                </p>
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
