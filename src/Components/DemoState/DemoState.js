import React, { Component } from 'react'

export default class DemoState extends Component {
    state = {
        // la thuoc tinh co san cua component = > dung de quan ly nguon du lieu thay doi ngoaif giao dien. Nhung cai nao lam thay doi giao dienj thi thuoc  thuoc tinh state
    isLogin : false,    
    }
    userName = 'Thanh';
    renderContent = ()=>{
        if(this.state.isLogin){
            return <p>
                Hello ! {this.userName}
            </p>    
        }
        return <button className="btn btn-info" onClick = { ()=>{
            this.handleClick();
        }}> Login </button>
    }
    handleClick = () =>{
    //    this.state.isLogin = true;
    //    console.log(this.state.isLogin);
    // khong duoc thay doi state truc tiep ma phair thong qua phuong thuc setstate 
    // setstate la phuong thuc co san cua lop doi tuong component => dung de thay doi gia tri trong this 
    // dong thoi goi lai ham render 
    this.setState({
        isLogin: true,
    })
    }

    render() {
        return (
            <div>
                <h3> IF - ELSE -  REACT</h3>
                {/* {this.isLogin? <p> Hello: {this.userName}</p>: <button className="btn btn-info"> Login </button>} */}
                {this.renderContent()}
            </div>
        )
    }
}
