import React, { Component } from 'react';


export class Item extends Component {
    render() {
      
        return ( 
            <div className='item d-flex'>
                <p>{this.props.title}</p>
                <img src={this.props.img}></img>
                <a href='#'>Check it out</a>
           </div>
        );
    }
}

export default Item;
