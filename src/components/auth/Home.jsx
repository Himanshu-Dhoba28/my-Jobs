import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>
            <section className="showcase">
                <header className="header">
                </header>
                <div className="overlay"></div>
                <div className="text">
                    <span style={{ float: "right", margin: "auto" }}><img style={{ borderRadius: "20px", width: "80%" }} src="./hero5.jpg" alt=""/></span>
                    <h2>WelCome to </h2>
                    <h3>My <span>Job</span></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.</p>
                    <NavLink to="/signup">SignUp</NavLink>
                </div>

                <div className="container">
                </div>

                <h3 className="why-us" >Why Us</h3>
                <div className="card-div">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4">
                        <div className="col mb-4">
                            <div className="card home-card">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                        <div className="col mb-4">
                            <div className="card home-card">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                        <div className="col mb-4">
                            <div className="card home-card">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                        <div className="col mb-4">
                            <div className="card home-card">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Home;