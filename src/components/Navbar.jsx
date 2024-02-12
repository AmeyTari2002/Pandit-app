import React from 'react'
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const links = [
        {
            id: 1,
            link: '/',
            content:'Home'
        },
        {
            id: 2,
            link: 'About-us',
            content:'About US'
            
        },
        {
            id: 3,
            link: 'Vidhi',
            content:'Know the Vidhi'
        },
        // {
        //     id: 4,
        //     link: 'Promoter Blog',
        //     content:'Promoter Blog'
        // },
        {
            id: 5,
            link: 'contact',
            content:'Contact'
        },
    ];
    return (
        <div className='flex justify-between items-center w-full h-20 px-4 shadow-lg shadow-gray-300 text-black '>
            <div className='flex'>
                <img className='mx-5' src="http://nebula.wsimg.com/e0fc1cd1b39f7d2da578568acd120729?AccessKeyId=728DA80C026EC46B17D5&disposition=0&alloworigin=1" height={20} width={90} alt="" />
                {/* <h1 className='lg:text-4xl font-signature ml-2 px-1 text-3xl '>Pandit</h1> */}
            </div>
            <ul className='hidden md:flex'>
                {
                    links.map(({ id, link,content }) => (
                        <li key={id}
                            className='px-4 cursor-pointer capitalize font-medium text-black 
                    hover:scale-105 hover:text-gray-700 duration-200'>
                        <Link to={link} smooth duration={500} >{content}
                        </Link>
                        </li>
                    ))
                }
            </ul>
            <div onClick={() => setNav(!nav)} className='cursor-pointer 
                pr-4 z-20 text-gray-400 md:hidden '>
                {
                    nav ? <FaTimes size={30} /> : <FaBars size={30} />
                }
            </div>

            {
                nav && 
                (
                    <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full 
                                h-full bg-white text-black z-10'>
                {
                    links.map(({ id, link,content }) => (
                        <li key={id}
                            className='px-4 cursor-pointer capitalize py-6 text-3xl md:text-4xl 
                            hover:scale-105 hover:text-gray-300 duration-200'>
                            <Link to={link} onClick={()=>setNav(!nav)} >{content}</Link>
                        </li>
                    ))
                }

                {/* <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>Home</li> */}

            </ul>

                )
            }
        </div>
    )
}

export default Navbar