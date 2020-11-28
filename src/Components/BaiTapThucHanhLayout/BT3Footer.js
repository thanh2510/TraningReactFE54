import React, { Component } from "react";

export default class BT3Footer extends Component {
  render() {
    return (
      <div>
        <footer className="text-muted bg-dark p-2 text-light">
          <div className="container">
            <p className="float-right text-light">
              <a href="#">Back to top</a>
            </p>
            <p>
              Album example is © Bootstrap, but please download and customize it
              for yourself!
            </p>
            <p>
              New to Bootstrap? <a href="../../">Visit the homepage</a> or read
              our <a href="../../getting-started/">getting started guide</a>.
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
