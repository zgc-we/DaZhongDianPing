import React from 'react';
import './index.css';

export default class CityHeader extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="city_header">
                <div className="city_header_left">{`<`}</div>
                <div className="city_header_righ"><span>国内</span><span>国际/港澳台</span></div>
            </div>
        )
    }
}