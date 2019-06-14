import React from 'react';
import './index.css';
import { proList, cityList } from '../../../utils/city'

export default class HotCity extends React.Component{
    constructor(props){
        super(props)
    }

    get_hot_city_list = () => {
        return proList.map((k,i) => (
            <div className="city_item" key={`key_${i}`}>{k}</div>
        ))
    }
    render(){
        return (
            <div className='hot_city'>
                <p>热门城市</p>
                <div className="hot_box">
                    {this.get_hot_city_list()}
                </div>
            </div>
        )
    }
}