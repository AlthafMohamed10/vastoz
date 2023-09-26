import React from 'react'

const Slider = () => {
  return (
    <div>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/assets/img/pages/cameras/cameras-accesories-banner.jpg" className="d-block w-100" alt="Camera" />
                    <div className="carousel-caption d-none d-md-block">
                            <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center py-10">
                                <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl">
                                    <div className="w-full">
                                    <div className="m-8 my-20 max-w-[400px] mx-auto bg-text-banner">
                                        <div className="mb-8">
                                        <h1 className="mb-4 text-3xl font-extrabold text-white">Cameras</h1>
                                        <p className="text-gray-600">Get the most out of Twitter by staying up to date with what's happening.
                                        </p>
                                        </div>
                                        <div className="space-y-4">
                                        {/* <button className="p-3 bg-black rounded-full text-white w-full font-semibold">Allow notifications</button> */}
                                        <button className="p-3 btn btn-dark border rounded-full w-full font-semibold">View More</button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/assets/img/pages/appliances/appliance-banner.jpg" className="d-block w-100" alt="Appliances" />
                    <div className="carousel-caption d-none d-md-block">
                        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center py-10">
                            <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl">
                                <div className="w-full">
                                <div className="m-8 my-20 max-w-[400px] mx-auto bg-text-banner">
                                    <div className="mb-8">
                                    <h1 className="mb-4 text-3xl font-extrabold text-white">Appliances</h1>
                                    <p className="text-gray-600">Get the most out of Twitter by staying up to date with what's happening.
                                    </p>
                                    </div>
                                    <div className="space-y-4">
                                    {/* <button className="p-3 bg-black rounded-full text-white w-full font-semibold">Allow notifications</button> */}
                                    <button className="p-3 btn btn-dark border rounded-full w-full font-semibold">View More</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/assets/img/pages/laptops/laptop.jpg" className="d-block w-100" alt="Laptops" />
                    <div className="carousel-caption d-none d-md-block">
                            <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center py-10">
                                <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl">
                                    <div className="w-full">
                                    <div className="m-8 my-20 max-w-[400px] mx-auto bg-text-banner">
                                        <div className="mb-8">
                                        <h1 className="mb-4 text-3xl font-extrabold text-white">Laptops</h1>
                                        <p className="text-gray-600">Get the most out of Twitter by staying up to date with what's happening.
                                        </p>
                                        </div>
                                        <div className="space-y-4">
                                        {/* <button className="p-3 bg-black rounded-full text-white w-full font-semibold">Allow notifications</button> */}
                                        <button className="p-3 btn btn-dark border rounded-full w-full font-semibold">View More</button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}

export default Slider
