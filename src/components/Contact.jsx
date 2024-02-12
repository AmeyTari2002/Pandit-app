import React from 'react'
import Navbar from './Navbar'

const Contact = () => {
    return (
        <>
            <div name='Contact' className='w-full h-screen p-4 text-black'>

                <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                    <div className='pb-2'>
                        <p className='lg:text-3xl text-3xl font-bold inline border-b-4
                     border-gray-500 sm:mx-56 md:mx-44 lg:mx-60'>
                            Contact
                        </p>
                        <p className='sm:mx-56 md:mx-44 lg:mx-60 py-4'>Phone No: 123456789</p>
                        <p className='sm:mx-56 md:mx-44 lg:mx-60 py-2'>Email: 123@gmail.com</p>
                    </div>

                    <div className='flex justify-center items-center'>
                        <form  className='flex flex-col w-full md:w-1/2'>
                            <input type="text" name="name" required
                                placeholder='Enter your name'
                                className='p-2 bg-transparent  
                        border-2 rounded-md 
                        focus:outline-none'
                            />
                            <input type="email" name="email" required
                                placeholder='Enter your Email'
                                className='my-2 p-2 bg-transparent  
                        border-2 rounded-md  
                        focus:outline-none required'
                            />
                            <textarea name="message" required
                                placeholder='Enter yur Message'
                                rows="6"
                                className='p-2 bg-transparent border-2 rounded-md 
                         focus:outline-none '>
                            </textarea>
                            <button className='bg-gradient-to-b
                     from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex
                     items-center rounded-md hover:scale-110 duration-300 '>
                                Let's talk
                            </button>
                        </form>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Contact