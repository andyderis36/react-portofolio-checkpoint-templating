const ContactDetail = () => {
    return (
        <>
            <div className='container py-16'>
                <div className='row'>
                    <div className='col-md-7 mt-3'>
                        <h1 className='mt-5 text-dark display-6 pb-4'>
                            <span className='text-primary'>My</span> Contact
                        </h1>
                        <p className='col-md-10 fs-5 text-dark'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Totam molestiae iure distinctio,
                            exercitationem repellendus voluptas odio quibusdam.
                            Harum, tempore necessitatibus.
                        </p>
                    </div>
                    <div className='col-md-5 mt-3 d-flex align-items-center justify-content-center'>
                        <div>
                            <div className='mb-2'>
                                <a
                                    href='#'
                                    className='text-dark fs-4 text-decoration-none'>
                                    <i className='fa-regular fa-envelope'></i> -
                                </a>
                            </div>
                            <div className='mb-2'>
                                <a
                                    href='#'
                                    target='_blank'
                                    className='text-dark fs-4 text-decoration-none'>
                                    <i className='fa-brands fa-whatsapp'></i> -
                                </a>
                            </div>
                            <div className='mb-2'>
                                <a
                                    href='#'
                                    target='_blank'
                                    className='text-dark fs-4 text-decoration-none'>
                                    <i className='fa-brands fa-instagram'></i> -
                                </a>
                            </div>
                            <div className='mb-2'>
                                <a
                                    href='#'
                                    target='_blank'
                                    className='text-dark fs-4 text-decoration-none'>
                                    <i className='fa-brands fa-linkedin'></i> -
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactDetail;
