import PropTypes from "prop-types";
import React from "react";
import Footer from "./footer/footer";
import "./layout.css";
import Nav from "./nav/nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
