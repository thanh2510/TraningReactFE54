import React, { Component } from 'react'
import Header from './Header'
import BT3Content from './BT3Content'
import BT3Footer from './BT3Footer'

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <BT3Content/>
                <BT3Footer/>
            </div>
        )
    }
}
