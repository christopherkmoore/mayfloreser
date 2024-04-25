import React from 'react';

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

                    <div className="flex my-4 w-2/3 lg:w-1/2">
                        <a href="https://www.facebook.com/mayfloresmtz/" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-mayra-green  w-8 mx-1 text-center pt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current font-black hover:animate-pulse'><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>
                        </a>
                        <a href="https://www.instagram.com/mayfloreser/" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-mayra-green  w-8 mx-1 text-center pt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current font-black hover:animate-pulse'><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" /></svg>
                        </a>
                        <a href="https://www.youtube.com/@mayfloreser" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-mayra-green  w-8 mx-1 text-center pt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current font-black hover:animate-pulse'>
                                <path d="M19.811 3.343H4.189C1.879 3.343 0 5.223 0 7.533v8.934c0 2.311 1.879 4.19 4.189 4.19h15.622c2.31 0 4.189 -1.88 4.189 -4.19v-8.934c0 -2.311 -1.879 -4.19 -4.189 -4.19m2.472 13.124c0 1.364 -1.109 2.473 -2.472 2.473H4.189c-1.363 0 -2.472 -1.109 -2.472 -2.473v-8.934c0 -1.364 1.109 -2.473 2.472 -2.473h15.622c1.363 0 2.472 1.109 2.472 2.473z" /><path d="M16.608 11.283 10.244 7.088a0.859 0.859 0 0 0 -1.331 0.717v8.391a0.858 0.858 0 0 0 0.858 0.858 0.858 0.858 0 0 0 0.473 -0.142l6.364 -4.196a0.858 0.858 0 0 0 0 -1.433m-5.978 3.319V9.399l3.946 2.601z" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactBox;