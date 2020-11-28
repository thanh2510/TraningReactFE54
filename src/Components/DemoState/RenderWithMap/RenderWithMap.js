import React, { Component } from "react";

export default class RenderWithMap extends Component {
  products = [
    { id: 1, name: "IPhone", price: 1000 },
    { id: 2, name: "IPhone X", price: 2000 },
    { id: 3, name: "IPhone XS", price: 3000 },
    { id: 4, name: "IPhone 8", price: 4000 },
  ];
  // renderProduct = () => {
  //   let arrJSX = [];
  //   for (let i in this.products) {
  //     let product = this.products[i];
  //     let jsxProduct = (
  //       <div>
  //         <div className="card">
  //           <img className="card-img-top" src="http://picsum.photos/200" alt />
  //           <div className="card-body">
  //             <h4 className="card-title">{product.name}</h4>
  //             <p className="card-text">{product.price}</p>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //     arrJSX.push(jsxProduct);
  //   }
  //   return arrJSX;
  // };
  
  renderProductWithMap = () => {
    let constArrJSX = this.products.map((product, index) => {
      return (
        <div className="col-3" key={index}>
          <div className="card">
            <img className="card-img-top" src="http://picsum.photos/200" alt />
            <div className="card-body">
              <h4 className="card-title">{product.name}</h4>
              <p className="card-text">{product.price}</p>
            </div>
          </div>
        </div>
      );
    });
    return constArrJSX;
  };
  renderTable = () =>{
      return this.products.map((product,index)=>{
          return <tr key={index}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
          </tr>
      })
  }
  render() {
    return <div className="row">
        {this.renderProductWithMap()}
    <table className="table">
<thead>
    <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Price</th>
    </tr>
</thead>
<tbody>
    {this.renderTable()}
</tbody>
    </table>
    </div>;

  }
}
