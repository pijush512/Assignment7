



import React from 'react';
import banner1 from '../../assets/vector1.png'
import banner2 from '../../assets/vector2.png'
import shakib from '../../assets/Shakib.jpg'

const Banner = ({inprogress}) => {
    return (
        <div className='mt-5 max-w-[1200px] mx-auto flex justify-between gap-5'>
            
            <div className='w-[780px] h-[250px] bg-cover bg-no-repeat flex items-center justify-center rounded-lg'
            style={{
                backgroundImage: `linear-gradient(to bottom right, #632EE3, #9F62F2), url(${shakib})`}}>
                <div>
                    <h1 className='text-center text-xl mb-2 text-white'>In-Progress</h1>
                    <h1 className='text-white text-center  font-bold text-4xl'>{inprogress}</h1>
                </div>
            </div> 

            <div className='w-[780px] h-[250px] bg-gradient-to-r from-[#54CF68] to-[#00827A] rounded-lg flex items-center justify-center' >
                <div>
                    <h1 className='text-center text-xl mb-2 text-white'>Resolved</h1>
                    <h1 className='text-white text-center  font-bold text-4xl'>0</h1>
                </div>
            </div>  

        </div>
         
    )
};

export default Banner;