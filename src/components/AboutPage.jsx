import React from 'react'
import Navbar from './Navbar'

const AboutPage = () => {
    return (
        <>

            <div className=" mb-7 sm:my-4 sm:mx-48">
                <div className='mt-7 flex flex-col items-center justify-center md:flex md:flex-row  sm:items-center  gap-4'>
                    <div>
                        <img src="http://nebula.wsimg.com/e0fc1cd1b39f7d2da578568acd120729?AccessKeyId=728DA80C026EC46B17D5&disposition=0&alloworigin=1" alt="" />
                    </div>
                    <div>
                        <h1 className='items-center ml-10'>
                            Think of a Dharmic Vidhi, Think of oPandit!</h1>
                    </div>
                </div>
                <div className='mx-8 mt-5 border-2 border-black rounded-lg p-7'>
                    <div>
                        <h2 className='font-bold  border-b-2 border-black inline-block'>Who We Are</h2>
                        <p className='py-2'> We are a team of professionals and domain experts with deep interest in the Indian culture.
                        </p>
                        <p className='   py-4'>We firmly believe that religion and rituals can be approached in a very organized and logical manner thus
                            effortlessly blending with today’s hectic schedules without compromising on the Dharmic karma.
                        </p>
                    </div>
                    <div>
                        <div>
                            <h2 className='font-bold  border-b-2 border-black inline-block'>Who We Are</h2>
                            <p className='py-2'> We are a team of professionals and domain experts with deep interest in the Indian culture.
                            </p>
                            <p className='   py-4'>We firmly believe that religion and rituals can be approached in a very organized and logical manner thus
                                effortlessly blending with today’s hectic schedules without compromising on the Dharmic karma.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AboutPage