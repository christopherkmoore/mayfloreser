import React from 'react';
import Socials from './Socials';

const ContactBox = () => {
    return (
        <>
            <div
                className="w-full  lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto bg-boxgreen rounded-2xl shadow-2xl">
                <div className="flex flex-col text-white">

                    <div className="flex my-4 w-2/3 lg:w-3/4">
                        <div className="flex flex-col">
                            <i className="fas fa-map-marker-alt pt-2 pr-2" />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-2xl text-mayra-green">Office Address</h2>
                            <p className="text-gray-400">Ilo Awela, Ota, Ogun State</p>
                        </div>
                    </div>

                    <div className="flex my-4 w-2/3 lg:w-1/2">
                        <div className="flex flex-col">
                            <i className="fas fa-phone-alt pt-2 pr-2" />
                        </div>

                        <div className="flex flex-col">
                            <h2 className="text-2xl text-mayra-green">Call Us</h2>
                            <p className="text-gray-400">Tel: 08055384406</p>

                            <div className='mt-5'>
                                <h2 className="text-2xl text-mayra-green">Send an E-mail</h2>
                                <p className="text-gray-400">info@mld.ng</p>
                            </div>

                        </div>
                    </div>

                    <Socials />
                </div>
            </div>
        </>
    )
}

export default ContactBox;