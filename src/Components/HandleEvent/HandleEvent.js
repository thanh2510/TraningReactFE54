import React, { Component } from "react";

export default class HandleEvent extends Component {
  showMessenger = () => {
    alert("hello Ngoc Thanh, chuc ban mot ngay moi tot lanh!");
  };
  showInfo = (info) =>{
    alert(info)
  }
  render() {
    return (
      <div>
        <h3> HandleEvent</h3>
        <hr />

        {/* khong dong mo ngoac, */}
        <button className="btn btn-info" onClick={this.showMessenger}>
          {" "}
          Click show Messenger
        </button>
        <hr />
        <button
          className="btn btn-success"
          onClick={() => {
            alert("hello Ngoc Thanh, chuc ban mot ngay moi tot lanh!");
          }}
        >
          Click show Messenger
        </button>
        <hr />
        <button
          className="btn btn-secondary"
          onClick={() => {
           this.showInfo('thanh')
          }}
        >
          Click show Messenger
        </button>
        <hr />

      </div>
    );
  }
}
