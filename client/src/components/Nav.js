import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import { useSpring, animated } from "react-spring";

const Example = props => {
  props = useSpring({
    from: { opacity: 0, marginLeft: -400 },
    to: { opacity: 1, marginLeft: 0 },
    delay: 500
  });
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <animated.div style={props}>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          Vimal Malayil
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </animated.div>
  );
};

export default Example;
