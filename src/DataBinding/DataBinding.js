import React from 'react'

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
            <h3> Datablinding</h3>
            <p id="title" className="title display-4">{title}</p>
            <img src={imgsrc} width="200" />
            <input className="form-control w-25" value={title} />
            <h3>Thong tin sinh vien</h3>
            <div className="card text-dark">
                <img className="card-img-top" src={sinhVien.hinhAnh} style={{width:200, height:200}} />
                    <div className="card-body">
                        <h4 className="card-title">{sinhVien.maSV}</h4>
                        <p className="card-text">{sinhVien.hinhAnh}</p>
                    </div>
            </div>
            <hr></hr>
            {renderImg()}
        </div>
    )
}
