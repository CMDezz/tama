import React, { Component } from 'react';
import Docs from './docs';

export class Header extends Component {
    render() {
        return (
            <div className="header" style={{backgroundImage: 'url(img/circles.png)'}}>
                <div className="container">
                    <div className="navBar pb-5" style={{ display: 'flex', flex: '1',justifyContent:'center' }}>
                        <div className="w-50  ">
                             <img className='text-left icon-size pl-5'src="img/white-logo.png" />
                          </div>
                         <div className='w-50 text-right pr-5 '>
                             <a href='#' className='btn bg-orange px-5 text-white '>Docs</a>
                         </div>
                     </div>
                     <div className='infor d-flex text-white pb-5 pt-5 ' style={{justifyContent:'center',alignItems:'center'}}>
                        <div className='d-flex pb-5'  style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                            <h2 className='rs'>Modern and Creative</h2>
                            <h2 className="rs">React.js Web Components</h2>
                            <p style={{fontSize:'17px'}}>No jQuery, no material design, Just React.</p>
                            <a href='https://codecanyon.net/item/tama-reactjs-web-components/24230771' target='_blank' className='btn bg-green w-100 mt-4 mb-5 text-white'>Purchase now</a>
                        </div>
                   </div>
                 </div>
        
             </div>


        );
    }
}

export default Header;
