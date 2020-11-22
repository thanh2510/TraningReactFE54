import React, { Component } from 'react'

export default class DatablingdingClassComponent extends Component {
    sinhVien = {
        ma: '001',
        ten: 'Ngoc Thanh',
        hinhAnh: 'https://picsum.photos/200'
    }
    renderPicture =() =>{
        return <img src="https://picsum.photos/200" />
    }
    render() {
        const title = "FrontEnd";
        const renderTitle = ()=>{
            return <p className="text-danger">
                {title}
            </p>
        };
        return (
            <div>
                <div className="container">
                <h3> RC </h3>
                {title}
                {renderTitle()}
                <h3> Thong tin sinh vien </h3>
                <ul>
                    <li>Ma sinh vien: {this.sinhVien.ma}</li>
                    <li>Ten sinh vien: {this.sinhVien.ten}</li>
                    <img src={this.sinhVien.hinhAnh}/>
                    <h3>renderPicture()</h3>
                    {this.renderPicture()}
                </ul>
                </div>
            </div>
        )
    }
}
