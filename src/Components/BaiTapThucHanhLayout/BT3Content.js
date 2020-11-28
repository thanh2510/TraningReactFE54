import React, { Component } from 'react'
import BT3Carousel from './BT3Carousel'
import BT3Product from './BT3Product'
import BT3SlideBar from './BT3SlideBar'

export default class BT3Content extends Component {
    render() {
        return (
            <div>
                <div className= "row">
                <div className="col-3">
                    <BT3SlideBar/>
                </div>
                <div className="col-9">
                    <BT3Carousel/>
                    <BT3Product/>
                </div>
                </div>
            </div>
        )
    }
}
