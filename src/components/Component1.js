import React from "react";
import { useSpring, animated } from "react-spring";

const Component1 = props => {
  props = useSpring({
    from: { opacity: 0, marginTop: -200 },
    to: { opacity: 1, marginTop: 0 }
    // delay: 1000
  });
  return (
    <animated.div style={props}>
      <div style={c1style}>
        <h1>Component 1</h1>
        <p>Yo thug days are yet to come get your feet on ground.</p>
      </div>
    </animated.div>
  );
};
const c1style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem"
};
export default Component1;
