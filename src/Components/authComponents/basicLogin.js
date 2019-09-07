import React, { Component } from 'react';

export class BasicLogin extends Component {
    render() {
        return (
            <div className =' d-flex'>
                <div className='basicLogin'>
                    <div className='formLogin'>
                            <p>Login to your account</p>
                            <div className='controls w-100'>
                                <input type='email' id='mail' placeholder='Email Address'/>
                                <input type='password'id='pass'placeholder='Password'/>
                                <div className='action'>
                                    <div>
                                    <input type='checkbox' id='remember'name='remember' value='rememberMe'/>
                                    <label for='remember'className='ml-2'>Remember me</label>
                                    </div>
                                    <a className = 'forgotPass'href='#'>Forgot password</a>
                    
                                </div>
                            </div>
                            <a class='btn btnLogin text-white w-100'>LOGIN</a>
                            <div className='line'>
                                <span>OR</span>
                            </div>
                            <div className='social d-flex w-100'>
                                <a id='FB'className='btn btn-primary'>Facebook</a>
                                <a id='TW'className='btn btn-info'>Twiter</a>
                                <a id='GG'className='btn btn-danger'>Google</a>
                            </div>
                            <div>
                                <span>New here?</span>
                                <a className='ml-3 createAcc' href='#'>Create an account</a>
                            </div>
                        </div>
                 
                </div>
                
            </div>
        );
    }
}

export default BasicLogin;
