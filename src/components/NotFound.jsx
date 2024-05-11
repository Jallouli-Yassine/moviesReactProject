import React, { Component, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  componentDidMount() {
    this.redirectTimer = setTimeout(() => {
      this.setState({ redirect: true });
    }, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.redirectTimer);
  }

  render() {
    if (this.state.redirect) {
      return alert("Redirecting to home page");
    }

    return (
        <div>
          <h1>404</h1>
          <h2>Page Not Found</h2>
        </div>
    );
  }
}
