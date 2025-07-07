import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
    return (
        <section id={"experience"}>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className={"container experience__container"}>
                <div className={"experience__frontend"}>
                    <h3>Frontend Development</h3>
                    <div className={"experience__content"}>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>HTML</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>CSS</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>React</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>GUI Design (Tkinter)</h4>
                                <small className={"text-light"}>Intermediate</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>Blender 3D</h4>
                                <small className={"text-light"}>Basic</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className={"experience__backend"}>
                    <h3>Backend & Data Science</h3>
                    <div className={"experience__content"}>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>Python</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>Data Science</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>Machine Learning</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>MySQL</h4>
                                <small className={"text-light"}>Intermediate</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>DBMS</h4>
                                <small className={"text-light"}>Intermediate</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>OpenCV</h4>
                                <small className={"text-light"}>Intermediate</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>TensorFlow</h4>
                                <small className={"text-light"}>Intermediate</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>Keras</h4>
                                <small className={"text-light"}>Intermediate</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>Scikit-learn</h4>
                                <small className={"text-light"}>Intermediate</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>Pandas</h4>
                                <small className={"text-light"}>Intermediate</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>NumPy</h4>
                                <small className={"text-light"}>Intermediate</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>Matplotlib</h4>
                                <small className={"text-light"}>Intermediate</small>
                            </div>
                        </article>
                       
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience