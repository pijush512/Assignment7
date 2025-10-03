



import React from 'react';
import banner1 from '../../assets/vector1.png'
import banner2 from '../../assets/vector2.png'
import shakib from '../../assets/Shakib.jpg'

const Banner = () => {
    return (
        <div className='mt-5 max-w-[1200px] mx-auto flex justify-between gap-5'>
            
            <div className='w-[780px] h-[250px] bg-cover bg-no-repeat flex items-center justify-center'
            style={{
                backgroundImage: `linear-gradient(to bottom right, #632EE3, #9F62F2), url(${shakib})`}}>
                
                <h1 className='text-white font-bold text-4xl'>0</h1>
            </div> 

            <div className='w-[780px] h-[250px] bg-gradient-to-r from-[#54CF68] to-[#00827A] rounded-lg flex items-center justify-center' >
                <h1 className='text-white font-bold text-4xl'>0</h1>
            </div>  

        </div>
         
    )
};

export default Banner;