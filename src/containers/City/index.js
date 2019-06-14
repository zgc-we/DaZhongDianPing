import React, {Component} from 'react';
import './index.css';
import {CityHeader, HotCity} from './components';

export default class City extends Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    render() {
        return (
            <div>
                <CityHeader />
                <HotCity />
            </div>
        )
    }
}