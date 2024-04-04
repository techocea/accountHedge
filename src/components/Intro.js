import React from 'react';
import img from '../images/Web-developer.svg';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <>
        <section>
                <div className="m-auto max-w-9xl p-2 md:p-12 h-5/6 hidden">
                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="zoom-out">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-blue-900 mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path><path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"></path></svg>
                            </div>
                            <h3 className="text-3xl  text-blue-900 
                            font-bold">Why AccountEdge Pro Hosting?</h3>
                            <div className='pt-6'>
                                &nbsp;  Not only do AccountEdge Pro customers enjoy powerful, easy-to-use software that supports them to efficiently run their business – on average, our customers save up to 55% compared to other popular accounting software.
                            </div>
                            <div>
                                <ul className='pl-10 marker:text-3xl list-image-bullet'>
                                    <li className='pl-2'>Easy to use</li>
                                    <li className='pl-2'>User friendly Interface</li>
                                    <li className='pl-2'>Complete Accounting</li>
                                    <li className='pl-2'>Serial / Warranty Tracking </li>
                                    <li className='pl-2'>Tax (Purchase / Sales / and all transaction)</li>
                                    <li className='pl-2'>Payable / Receivable </li>
                                    <li className='pl-2'>Cash / Bank Management </li>
                                    <li className='pl-2'>Inventory Management </li>
                                    <li className='pl-2'>General Ledger</li>
                                    <li className='pl-2'>Reporting and More...</li>
                                </ul>
                                <p className='my-3 text-xl text-gray-600 font-semibold hidden'>
                                        &nbsp; &nbsp; Investing in advanced accounting software is a strategic move for businesses looking to enhance financial efficiency, reduce manual errors, and gain real-time insights. Embrace the digital transformation in financial management and empower your team to focus on strategic initiatives that drive business growth. Choose a reliable accounting software solution that aligns with your business needs and sets the foundation for a more streamlined and agile financial future.
                                </p>
                            </div>
                            <div className='hidden'>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>
                                    Not only do AccountEdge customers enjoy powerful, easy-to-use software that supports them to efficiently run their business – on average, our customers save up to 55% compared to other popular accounting software.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center ">
                            <div className='text-blue-900 mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path><path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"></path></svg>
                            </div>
                            <h3 className="text-3xl  text-blue-900 
                            font-bold">Why MYOB Cloud Hosting!</h3>
                            <div className='pt-6'>
                                &nbsp;  From Startup to Medium Scale, We are the Good among the Best Cloud Software Solution in the market.
                            </div>
                            <div>
                            <ul className='pl-10 marker:text-3xl list-image-bullet'>
                                    <li>Hello</li>
                                    <li>Hello</li>
                                    <li>Hello</li>
                                </ul>
                                <p className='my-3 text-xl text-gray-600 font-semibold hidden'>
                                    &nbsp; &nbsp; Affordable accounting software opens doors for small businesses to access powerful financial management tools without breaking their budget. As you explore your options, prioritize solutions that align with your specific needs and growth plans. By leveraging the cost-effective features of affordable accounting software, you can efficiently manage your finances, make informed decisions, and set the stage for the continued success of your business.
                                </p>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </section>
            
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6 hidden" id='about' >

                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <img alt="card img" className="rounded-t float-right" src={img} />
                        </div>
                        <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
                            
                            <h3 className="text-3xl  text-blue-900 font-bold">We develop high quality bespoke web and mobile applications for organizations, institutions and SMEs</h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>Our team is well vast in software development and is ready to help develop the applications of your choice.</p>
                            </div>
                            
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>We take responsibility for building custom software solutions that caters for automation of your business processes and improve efficiency.</p>
                            </div>
                            <Link to="/contact" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
                                Contact us
                                <svg className="w-4 h-4 ml-1 group-hover: translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Intro;