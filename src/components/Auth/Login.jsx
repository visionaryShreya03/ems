import React, { useState } from 'react';
const Login = ({handleLogin}) => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler=(e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }
    return ( 
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 border-emerald-600 p-20 border-emerald-600 rounded-xl'>
                <form
                onSubmit={(e)=>{
                    submitHandler(e)

                }}
                className='flex flex-col items-center justify-center'>
                    <input
                    value={email}
                    onChange={(e)=>{
                       setEmail(e.target.value) 
                    }}
                    required 
                    className='outline-none  bg-transparent border-2 font-medium border-emerald-600 py-2 px-6 text-xl rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' />
                    <input
                    value={password} 
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                   
                    required className='outline-none  bg-transparent border-2 font-medium border-emerald-600 py-2 px-6 mt-4 text-xl rounded-full placeholder:text-gray-400' type="password" placeholder='Enter password' />
                    <button className='text-white outline-none hover:bg-emerald-800 bg-emerald-600 w-full font-semibold py-2 px-8 mt-7 text-xl rounded-full placeholder:text-white'>Log in</button>
                </form>

            </div>
            
        </div>
     );
}
 
export default Login;