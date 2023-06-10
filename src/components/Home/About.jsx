import { useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <>
            <div className='container py-16'>
                <div>
                    <h1 className='border-bottom mt-5 text-dark display-6 pb-4 text-center'>
                        About Me
                    </h1>
                    <p className='text-dark fs-5 text-center'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ea cumque eum illum asperiores voluptatibus,
                        placeat saepe consectetur aut odit nihil unde a libero
                        voluptas perferendis.
                    </p>
                </div>

                <div className='d-flex align-items-center justify-content-center'>
                    <div className={"number-wrap mx-2 bg-primary text-white"}>
                        1
                    </div>
                    <div className={"number-wrap mx-2"}>2</div>
                </div>
            </div>
        </>
    );
};

export default About;
