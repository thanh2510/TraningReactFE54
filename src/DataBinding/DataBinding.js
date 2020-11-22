import React from 'react'
import DatablingdingClassComponent from './DatablingdingClassComponent';

export default function DataBinding() {
    const title = 'CyberSoft';
    const imgsrc = 'http://picsum.photos/200/200';
    const sinhVien = {
        maSV:'0001',
        tenSinhVien:'Ngoc Thanh',
        hinhAnh:'https://picsum.photos/200/200'
    };
    // binding ham 
    const renderImg= ()=>{
        //  gia tri tra ve mot chuoi, so, code, jsx  
        return (
        <div>
            <h3>
                Hinh Anh renderImg
            </h3>
            <img src ={sinhVien.hinhAnh} width="200" height="200"></img>
        </div>
        )
    }
    return (
        <div>
           <DatablingdingClassComponent/>
            {/* {renderImg()} */}
        </div>
    )
}
