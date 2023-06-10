const Education = () => {
    return (
        <>
            <div className='container py-16'>
                <h1 className='border-bottom mt-5 mb-5 text-dark display-6 pb-4 text-center'>
                    Education
                </h1>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 mb-5'>
                        <div className='d-flex'>
                            <div className='mr-lg-5 mr-3'>
                                <i className='fa-solid fa-medal icon icon-light icon-bg bg-white shadow rounded-circle d-block'></i>
                            </div>
                            <div>
                                <p className='text-dark mb-1'>(2018 - 2022)</p>
                                <h4>Lorem </h4>
                                <p className='mb-0 text-light'>
                                    Lorem, ipsum dolor.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 mb-5'>
                        <div className='d-flex'>
                            <div className='mr-lg-5 mr-3'>
                                <i className='fa-solid fa-medal icon icon-light icon-bg bg-white shadow rounded-circle d-block'></i>
                            </div>
                            <div>
                                <p className='text-dark mb-1'>(2014 - 2018)</p>
                                <h4>Lorem, ipsum.</h4>
                                <p className='mb-0 text-light'>
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Education;
