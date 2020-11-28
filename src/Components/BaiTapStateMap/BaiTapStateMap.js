import React, { Component } from "react";
import BaiTapStateGlassJS from "./BaiTapStateGlassJS/BaiTapStateGlassJS";

export default class BaiTapStateMap extends Component {
  render() {
    return (
      <div>
        <div className="content" style={{ backgroundImage: 'url(./img/Glass/bg.jpg)'}}>
          <div className="content__nav" >
            <h3> TRY GLASSES APP ONLINE</h3>
          </div>
          <div className="content__glass">
            <div className="container">
              <div className="row">
                {/* <div className="glass__model col-4">
                  <img className="img-fluid" src="./img/Glass/model.jpg" alt />
                  <div className="glass__model__glass">
                    <img className src="./img/Glass/v1.png" alt />
                  </div>
                  <div className="glass__model__text">
                    <h3>FENDI F4300</h3>
                    <p>
                      Light pink square lenses define these sunglasses, ending
                      with amother of pearl effect tip.
                    </p>
                  </div>
                </div> */}
                <BaiTapStateGlassJS/>
                <div className="glass__item col-8">
                  <div className="row">
                    <div className="item col-4">
                      <div className="item__cover" onClick={(index)=>{
                        
                    }}>
                        <img src="./img/Glass/g1.jpg" alt />
                      </div>
                    </div>
                    <div className="item col-4">
                      <div className="item__cover">
                        <img src="./img/Glass/g2.jpg" alt />
                      </div>
                    </div>
                    <div className="item col-4">
                      <div className="item__cover">
                        <img src="./img/Glass/g3.jpg" alt />
                      </div>
                    </div>
                    <div className="item col-4">
                      <div className="item__cover">
                        <img src="./img/Glass/g4.jpg" alt />
                      </div>
                    </div>
                    <div className="item col-4">
                      <div className="item__cover">
                        <img src="./img/Glass/g5.jpg" alt />
                      </div>
                    </div>
                    <div className="item col-4">
                      <div className="item__cover">
                        <img src="./img/Glass/g6.jpg" alt />
                      </div>
                    </div>
                    <div className="item col-4">
                      <div className="item__cover">
                        <img src="./img/Glass/g7.jpg" alt />
                      </div>
                    </div>
                    <div className="item col-4">
                      <div className="item__cover">
                        <img src="./img/Glass/g8.jpg" alt />
                      </div>
                    </div>
                    <div className="item col-4">
                      <div className="item__cover">
                        <img src="./img/Glass/g9.jpg" alt />
                      </div>
                    </div>
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
