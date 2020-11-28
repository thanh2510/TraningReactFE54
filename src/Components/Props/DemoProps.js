import React, { Component } from "react";
import ProductRFC from "./ProductRFC";

export default class DemoProps extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-center"> Danh sách sản phẩm</h3>
        <div className="row">
          <div className="col-4" >
            <ProductRFC name="ProductRFC1" price="1.000$" />
          </div>
          <div className="col-4" >
            <ProductRFC name="ProductRFC2" price="1.200$"/>
          </div>
          <div className="col-4" >
            <ProductRFC name="ProductRFC3" price="1.400$"/>
          </div>
          
        </div>
      </div>
    );
  }
}
