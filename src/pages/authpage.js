import React from 'react';
import LoginForm from '../components/login'
import RegisterForm from '../components/register'

const AuthPage =()=>(
    <div className="row justify-content-between">
        <div className="col-md-5">
            <LoginForm/>
        </div>

        <span style={{border:"1px solid #ababab"}}></span>

        <div className="col-md-6">
            <RegisterForm/>
        </div>
    </div>
);
export default AuthPage;