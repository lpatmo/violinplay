import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="mx-auto">
            <div>
              Music &copy; 2019 by{" "}
              <a
                href="https://kickstarter.com/projects/violinplay/violinplay"
                target="_blank"
              >
                Linda
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
