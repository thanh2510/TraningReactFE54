import React, { Component } from "react";

export default class DemoReactClassComponent extends Component {
  // render là phuong thức chứa nội dung giao diện của thẻ <DemoReactClassComponent></DemoReactClassComponent>

  render() {
    //khai báo biến hàm ....
    return (
      <div>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Active link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled link
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
