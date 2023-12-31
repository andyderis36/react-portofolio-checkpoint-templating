const AboutDetail = () => {
    return (
        <>
            <div className='container py-16 pb-5'>
                <div className='row'>
                    <div className='col-md-8 mt-3'>
                        <h1 className='mt-5 text-dark display-6 pb-4'>
                            <span className='text-primary'>Lorem.</span> Lorem.
                        </h1>
                        <p className='col-md-8 fs-5 text-dark'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Ipsum aperiam ex beatae possimus, quibusdam
                            praesentium nesciunt rerum dolorem soluta eaque?
                        </p>
                    </div>
                    <div className='col-md-4 d-flex align-items-center justify-content-center'>
                        <img
                            src='#'
                            alt='Foto Sendiri'
                            width='630'
                            height='450'
                            loading='lazy'
                            class='d-block mx-lg-auto img-fluid'></img>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutDetail;
