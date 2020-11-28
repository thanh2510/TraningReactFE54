import React, { Component } from 'react'
export default class BaiTapStateGlassJS extends Component {
     arrProduct = [

        { id: 1, price: 30, name: 'GUCCI G8850U', url: './img/Glass/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 2, price: 50, name: 'GUCCI G8759H', url: './img/Glass/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 3, price: 30, name: 'DIOR D6700HQ', url: './img/Glass/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 4, price: 30, name: 'DIOR D6005U', url:  './img/Glass/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 5, price: 30, name: 'PRADA P8750', url: './img/Glass/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 6, price: 30, name: 'PRADA P9700', url: './img/Glass/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 7, price: 30, name: 'FENDI F8750', url: './img/Glass/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 8, price: 30, name: 'FENDI F8500', url: './img/Glass/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 9, price: 30, name: 'FENDI F4300', url: './img/Glass/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
       ];
      //  state ={
      //      glassSrc='./img/Glass/v1.png',
      //      glassTitle='FENDI F4300', 
      //      glassContent='Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.'
      //  }
       renderWithMap = () =>{
          //  let render = this.arrProduct.map((glass, index) =>{
          //      return(
          //       <div className="glass__model col-4" key={index}>
          //       <img className="img-fluid" src="./img/Glass/model.jpg" alt />
          //       <div className="glass__model__glass">
          //         <img className src="./img/Glass/v1.png" alt />
          //       </div>
          //       <div className="glass__model__text">
          //         <h3>FENDI F4300</h3>
          //         <p>
          //           Light pink square lenses define these sunglasses, ending
          //           with amother of pearl effect tip.
          //         </p>
          //       </div>
          //     </div>
          //      );
          //  });
          //  return render;
          return <div>
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
        </div>
       };

    render() {
        return (
            <div  className="glass__model col-4">
                {this.renderWithMap()}
            </div>
        )
    }
}
