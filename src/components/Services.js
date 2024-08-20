import React from 'react';
import img from '../images/CEO.png'; 
import img2 from '../images/CTO.png';
import img3 from '../images/CMO.png';
import img4 from '../images/CFO.png';

const Services = () => {

    return (
        <div id="services" className="bg-gray-100 py-12">
            <section data-aos="zoom-in-down">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Team</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-blue-900'></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
                        We are deeply committed to the growth and success of students like us.
                    </h2>
                </div>

                <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-5 group">
                            <div className="text-center text-sm">
                                <img alt="CEO" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                <h2 className="font-semibold my-2 text-2xl">Vetri Prabhakar</h2>
                                <h2 className="font-semibold my-2 text-xl">CEO</h2>
                                <p className="text-md font-medium leading-relaxed">
                                    I am the Chief Executive Officer of Sylabiz. I am responsible for managing our team as well as development of our website and other technical aspects of our compnay. I am a Senior at TAMS and am currently studying Computer Science. 
                                </p>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-5 group">
                            <div className="text-center text-sm">
                                <img alt="CTO" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                <h2 className="font-semibold my-2 text-2xl">Kevin Li</h2>
                                <h2 className="font-semibold my-2 text-xl">CTO</h2>
                                <p className="text-md font-medium leading-relaxed">
                                   I am the Chief Technical Officer of Sylabiz and I am responsible for the development of our website and other technical aspects of the company. I am a senior at TAMS and am currently studying Computer Engineering.
                                   </p>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-5 group">
                            <div className="text-center text-sm">
                                <img alt="CMO" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                <h2 className="font-semibold my-2 text-2xl">Jason Sha</h2>
                                <h2 className="font-semibold my-2 text-xl">CMO</h2>
                                <p className="text-md font-medium leading-relaxed">
                                I am the Chief Marketing Officer of Sylabiz, and I’m responsible for connecting our products to potential investors or students. I am a senior at TAMS and am currently part of the General Mathematics and Science Track. 
                                </p>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-5 group">
                            <div className="text-center text-sm">
                                <img alt="CFO" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                                <h2 className="font-semibold my-2 text-2xl">Anant Jayaraman</h2>
                                <h2 className="font-semibold my-2 text-xl">CFO</h2>
                                <p className="text-md font-medium leading-relaxed">
                                        I am the Chief Financial Officer of Sylabiz and I am responsible for managing the financial aspects of our company as well as negotiations with Investors. I am a senior at TAMS and am currently studying Biomedical Engineering.
                                     </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services;
