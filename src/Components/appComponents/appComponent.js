import React, { Component } from 'react';
import Item  from './../item';

export class AppComponent extends Component {
    render() {
        return (
            <div className = "AppComponents">
            <h2 className='rs py-5'>Application Components</h2>
             <div className="AppItems  container">
                 <div className="d-flex">
                    <Item title='Inbox' img='img/inbox.png'></Item>
                    <div>
                    <Item  title='Contact form' img='img/contact-form.png'></Item>
                    </div>
              
                 </div>
             </div>
         </div>
        );
    }
}

export default AppComponent;
