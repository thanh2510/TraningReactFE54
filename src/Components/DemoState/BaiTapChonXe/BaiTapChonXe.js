import React, { Component } from "react";

export default class BaiTapChonXe extends Component {
    state ={
        imgSrc: './img/car/products/black-car.jpg' 
    }
    changeColor = (newcolor) =>{
        this.setState({
            imgSrc:`./img/car/products/${newcolor}-car.jpg`
        })
    }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-7">
            {/* hinh anh cua xe  */}
            <img  className="w-100" src={this.state.imgSrc} />
          </div>
          <div className="col-5">
            <div className="card text-white ">
              <div className="card-header bg-info">
               <h4> Editer color</h4>
              </div>
              <div className="card-body">
                <div className="row p-2 border m-2 rounded">
                  <div className="col-2">
                    <img onClick={()=>{
                         this.changeColor('black');
                    }}
                      className="w-100"
                      src="./img/car/icons/icon-black.jpg"
                    />
                  </div>
                  <div className="col-10 text-dark">
                    <h4> Black Color</h4>
                    <p> Black Color</p>
                  </div>
                </div>
                <div className="row p-2 border m-2 rounded">
                  <div className="col-2">
                    <img onClick={() =>{
                                this.changeColor('red');
            }}
                      className="w-100"
                      src="./img/car/icons/icon-red.jpg"
                    />
                  </div>
                  <div className="col-10 text-dark">
                    <h4> Red Color</h4>
                    <p> Red Color</p>

                  </div>
                </div>
                <div className="row p-2 border m-2 rounded">
                  <div className="col-2">
                    <img onClick={() =>{
                 this.changeColor('silver');
            }}
                      className="w-100"
                      src="./img/car/icons/icon-silver.jpg"
                    />
                  </div>
                  <div className="col-10 text-dark">
                    <h4> Silver Color</h4>
                    <p> Silver Color</p>

                  </div>
                </div>
                <div className="row p-2 border m-2 rounded">
                  <div className="col-2">
                    <img onClick={() =>{
                 this.changeColor('steel');
            }}
                      className="w-100"
                      src="./img/car/icons/icon-steel.jpg"
                    />
                  </div>
                  <div className="col-10 text-dark">
                    <h4> Steel Color</h4>
                    <p> Steel Color</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
