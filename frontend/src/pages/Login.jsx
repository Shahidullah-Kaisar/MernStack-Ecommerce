import React, { useState } from 'react';

const Login = () => {
    const [currentState, setCurrentState] = useState('Sign Up')
    return (
        <form>
            <div>
                <p>{currentState}</p>
                <hr />
            </div>
            { currentState === 'Login' ? " " : <input type="text" placeholder='Name'/> }
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <div>
                <p>Forgot your password?</p>
                {
                    currentState === "Login"
                    ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create a account</p>
                    : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login</p>
                }
            </div>
        </form>
    );
};

export default Login;