import React, { Component } from "react";

export default class ProductRCC extends Component {
  render() {
      let {sanPham} = this.props;
    //   let {maSP, tenSP, giaBan} = this.props.sanPham;
    // this.props la thuộc tính có sẵn của component dùng để nhận giá trị từ component cha truyền vào  
    // this.props thuộc tính không được gán giá lại giá trị 
    return (
      <div>
        <div className="card h-100">
          <img
            className="card-img-top"
            src={sanPham.hinhAnh}
          />
          <div className="card-body">
            <h4 className="card-title">{sanPham.tenSP}</h4>
            <p className="card-text" >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              esse necessitatibus neque.
              {this.props.sanPham.giaBan}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
