import React from 'react'
// react funtion component nhan props la tham so dau vao cua ham component 
export default function ProductRFC(props) {
    // let name = props.name;
    let {name, price} = props;
    return (
        <div>
             <div className="card h-100">
          <img className="card-img-top" src="https://tin247.com.vn/wp-content/uploads/2019/12/img_5dfda73271ca9-1.jpg" alt />
          <div className="card-body">
    <h4 className="card-title">{name}</h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              esse necessitatibus neque.
            </p>
          </div>
        </div>
        </div>
    )
}
