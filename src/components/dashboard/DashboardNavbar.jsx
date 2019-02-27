import React from "react";
import { Navbar, NavItem } from "react-materialize";

const DashboardNavbar = (props) => {
  const { brand } = props;
  return (
    <Navbar brand={brand} right>
      <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
      <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
      <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
      <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
    </Navbar>
  );
}

export default DashboardNavbar;