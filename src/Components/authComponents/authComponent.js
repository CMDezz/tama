import React, { Component } from 'react';
import  Item from './../item';
import Data from './data';


export class AuthComponent extends Component {
    render() {
    let item3 = Data[0].map((item,i)=>{
    return (<Item title={item.title} img={item.img} ></Item>)
    })
    let item2= Data[1].map((item,i)=>{
        return (<Item title={item.title} img={item.img} ></Item>)
        })
        return (
            <div className = "AuthComponents">
               <h2 className='rs py-5'>Auth Components</h2>
                <div className="AuthItems  container">
                    <div className="d-flex">
                    {item3}
                    </div>
                    <div className="d-flex">
                     {item2}
                    </div>
                  
                </div>
            </div>
        );
    }
}

export default AuthComponent;
