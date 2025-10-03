import React from 'react';
import x from '../../assets/x.png'
import linkedIn from '../../assets/in.png'
import faceBook from '../../assets/fb.png'
import gmail from '../../assets/fax.png'

const Footer = () => {
    return (
        <div className=' bg-black'>
            <div className='max-w-[1200px] mx-auto flex flex-col items-center md:items-start md:flex-row justify-between '>
                <div className='py-10'>
                    <h2 className='font-bold text-lg text-white'>CS — Ticket System</h2>
                    <p className='mt-3 text-[#A1A1AA]'>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard <br /> dummy text ever since the 1500s, when an <br /> unknown printer took a galley of type and <br /> scrambled it to make a type specimen book.</p>
                </div>

                <div className='py-10'>
                    <h2 className='font-semibold text-white'>Company</h2>
                    <ul className='mt-3 text-[#A1A1AA] '>
                        <li className='mb-2'>About Us</li>
                        <li className='mb-2'>Our Mission</li>
                        <li>Contact Saled</li>
                    </ul>
                </div>

                <div className='py-10'>
                    <h2 className='font-semibold text-white'>Services</h2>
                    <ul className='mt-3 text-[#A1A1AA] '>
                        <li className='mb-2'>Products & Services</li>
                        <li className='mb-2'>Customer Stories</li>
                        <li className='mb-2'>Download Apps</li>
                    </ul>
                </div>

                <div className='py-10'>
                    <h2 className='font-semibold text-white'>Information</h2>
                    <ul className='mt-3 text-[#A1A1AA] '>
                        <li className='mb-2'>Privacy Policy</li>
                        <li className='mb-2'>Terms & Conditions</li>
                        <li className='mb-2'>Join Us</li>
                    </ul>
                </div>

                <div className='py-10'>
                    <h2 className='font-semibold text-white'>Social Links</h2>
                    <ul className='mt-3 text-[#A1A1AA] '>
                        <li className='flex items-center gap-2'>
                            <img src={x} alt="" />
                            @CS — Ticket System</li>

                        <li className='flex items-center gap-2 mt-3'>
                            <img src={linkedIn} alt="" />
                            @CS — Ticket System</li>

                        <li className='flex items-center gap-2 mt-3'>
                            <img src={faceBook} alt="" />
                            @CS — Ticket System</li>

                        <li className='flex items-center gap-2 mt-3'>
                            <img src={gmail} alt="" />
                            @CS — Ticket System</li>
                    </ul>
                </div>
            </div>
            <div className='max-w-[1200px] mx-auto'>
                <hr />
                <p className='text-center mt-3 text-[#A1A1AA] pt-2 pb-5'>© 2025 CS — Ticket System. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;