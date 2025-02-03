import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
    
    const [image, setImage] = useState('');

    const images = [
        assets.hero_img, 
       
    ];

    useEffect(() => {
    
        setImage(images[0]);

        const interval = setInterval(() => {
            setImage((prevImage) => {
                const currentIndex = images.indexOf(prevImage);
                const nextIndex = (currentIndex + 1) % images.length;
                return images[nextIndex];
            });
        }, 3000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='flex flex-col sm:flex-row border border-gray-400'>
            {/* Hero Left Side */}
            <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
                <div className='text-[#414141]'>
                    <div className='flex items-center gap-2'>
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                        <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
                    </div>
                    <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>
                        Latest Arrivals
                    </h1>
                    <div className='flex items-center gap-2'>
                        <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                        <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                    </div>
                </div>
            </div>
            {/* Hero Right Side */}
            <img className='w-full sm:w-1/2' src={image} alt="Hero" />
        </div>
    );
};

export default Hero;



/*import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-row border border-gray-400'>

            //left side
            <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
                <div className='text-[#414141]'>
                    <div className='flex items-center gap-2'>
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                        <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
                    </div>
                    <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                    <div className='flex items-center gap-2'>
                        <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                        <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                    </div>
                </div>
            </div>

            //right side

            <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
        </div>
    );
};

export default Hero;

*/
