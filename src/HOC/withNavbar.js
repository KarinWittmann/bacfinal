import React from "react";
import Navbar from "../Navigation/Navigation";

const WithNavbar = WrappedComponent => {
  return class extends React.Component {
    render() {
      return (
        <>
          <header>
            <Navbar />
          </header>
          <main>
            <WrappedComponent />
          </main>
        </>
      );
    }
  };
};

export default WithNavbar;
