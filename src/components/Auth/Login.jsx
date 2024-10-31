import React, { useState } from 'react'

const Login = ({ handleLogin }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }

    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-[3px] border-red-200 p-20 rounded-md'>
                <form action="" onSubmit={(e) => {
                    submitHandler(e)
                }} className='flex flex-col items-center justify-center'>
                    <input value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }} required className=' outline-none border-2 border-green-600 rounded-full py-3 px-5 text-xl bg-transparent placeholder:text-gray-200' type="email" placeholder='Enter your Email' />
                    <input value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }} required className=' outline-none border-2 border-green-600 rounded-full py-3 px-5 text-xl bg-transparent placeholder:text-gray-200 mt-10' type="password" placeholder='Enter your Password' />
                    <button className='mt-10 text-white hover:bg-green-600 bg-red-600 w-full rounded-full py-3 px-5 text-xl placeholder:text-white'>Log in</button>

                </form>
            </div>

        </div>
    )
}

export default Login