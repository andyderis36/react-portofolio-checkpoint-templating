const RecentWork = () => {
    return (
        <>
            <div className='container py-16 pt-5'>
                <h1 className='border-bottom mt-5 mb-5 text-dark display-6 pb-4 text-center'>
                    Recent Work
                </h1>
                <div class='row gx-2 mb-5'>
                    <div class='col-12 col-lg-4'>
                        <p class='fw-semibold mb-1 fs-5 text-dark'>
                            Lorem, ipsum dolor.
                        </p>
                    </div>
                    <div class='col-12 col-lg-8'>
                        <p class='fw-semibold fs-5 text-dark'>Lorem, ipsum.</p>
                        <p class='text-muted text-dark fw-light fs-5'>
                            <span>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Rerum fugit possimus maxime
                                veritatis consectetur illum quo ad obcaecati
                                quaerat cupiditate.
                            </span>
                        </p>
                        <a
                            target='_blank'
                            href='#'
                            class='link-body fs-5 text-primary'>
                            Lorem, ipsum.
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecentWork;
