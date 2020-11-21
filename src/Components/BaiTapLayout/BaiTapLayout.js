import React, { Component } from 'react'
import Banner from './Banner'
import Header from './Header'
import Laptop from './Laptop'
import ProductLaptop from './ProductLaptop'
import Smartphone from './Smartphone'

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div>
                <Header />
                <Banner />
                <Smartphone />
                <Laptop />
            </div>
        )
    }
}
