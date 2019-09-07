import React, { Component } from 'react';
import  Item from './../item';
import Data from './data';


export class UiComponent extends Component {
    render() {
    let item3 = Data.map((item,i)=>{
    return (<Item title={item.title} img={item.img} ></Item>)
    })

        return (
            <div className = "UiComponents">
               <h2 className='rs py-5'>UI Components</h2>
                <div className="UiItems  container">
                    <div className="d-flex">
                    {item3}
                    </div>             
                </div>
            </div>
        );
    }
}

export default UiComponent;
