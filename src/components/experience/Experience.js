import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import { motion } from 'framer-motion';

const Experience = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 60, scale: 0.98 },
        visible: {
            opacity: 1, y: 0, scale: 1,
            transition: { duration: 0.7, ease: 'easeOut', staggerChildren: 0.15 }
        }
    };
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
    };
    return (
        <motion.section id={"experience"}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.h5 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>What Skills I Have</motion.h5>
            <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>My Experience</motion.h2>
            <div className={"container experience__container"}>
                <motion.div className={"experience__frontend"} variants={cardVariants}>
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
                </motion.div>
                <motion.div className={"experience__backend"} variants={cardVariants}>
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
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Experience