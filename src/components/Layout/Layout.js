import React from "react";
import Auxiliary from "../../hoc/Auxiliary";

const Layout = (props) => (
  <Auxiliary>
    <div>Toolbar, Side drawer, backdrop</div>
    <main>{props.children}</main>
  </Auxiliary>
);

export default Layout;
