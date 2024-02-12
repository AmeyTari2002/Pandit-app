import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Navbar from './Navbar';
import About from './About';
const Sliding = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: false,
        
    };
    return (
        <>
            <div className="slider-container mt-5 mx-5 sm:my-4 sm:mx-40">
                <Slider {...settings}>
                    <div className='h-[300px] sm:h-[500px] w-auto  bg-gray-500 rounded-lg'>
                        <img src='http://nebula.wsimg.com/468d20ef9a16612b7b24c1921185a1fa?AccessKeyId=728DA80C026EC46B17D5&disposition=0&alloworigin=1'
                            className=' w-[100%] h-[100%] rounded-lg object-fill' alt="" />
                    </div>
                    <div className='h-[300px] sm:h-[500px] w-auto  bg-blue-400 rounded-lg'>
                        <img src='http://nebula.wsimg.com/75329406e8e4cb46cd6cad20dd989b2e?AccessKeyId=728DA80C026EC46B17D5&disposition=0&alloworigin=1'
                            className=' w-[100%] h-[100%] rounded-lg object-fit' alt="" />
                    </div>
                    <div className='h-[300px] sm:h-[500px] w-auto  bg-green-400 rounded-lg'>
                        <img src='http://nebula.wsimg.com/20d23a010b5165ba24ad65557d403db3?AccessKeyId=728DA80C026EC46B17D5&disposition=0&alloworigin=1'
                            className=' w-[100%] h-[100%] rounded-lg object-fit' alt="" />
                    </div>
                    <div className='h-[300px] sm:h-[500px] w-auto  bg-pink-200 rounded-lg'>
                        <img src='http://nebula.wsimg.com/7517e858e7c1cbbd3ad3a018e88bebc0?AccessKeyId=728DA80C026EC46B17D5&disposition=0&alloworigin=1'
                            className=' w-[100%] h-[100%] rounded-lg object-fit' alt="" />
                    </div>
                    <div className='h-[300px] sm:h-[500px] w-auto  bg-purple-400 rounded-lg'>
                        <img src='http://nebula.wsimg.com/1bf6013e1d0a0a90604b346eddc9776f?AccessKeyId=728DA80C026EC46B17D5&disposition=0&alloworigin=1'
                            className=' w-[100%] h-[100%] rounded-lg object-fit' alt="" />
                    </div>

                </Slider>
            </div>
            <About/>
        </>
    )
}

export default Sliding