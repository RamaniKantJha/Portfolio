import React, { useState } from 'react';
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from "react-icons/fa"
import {VscFolderLibrary} from 'react-icons/vsc'
import { motion } from "framer-motion";
import Popup from './Popup';

const LazyExperience = React.lazy(() => import('../experience/Experience'));
const LazyProjects = React.lazy(() => import('../portfolio/Portfolio'));

const About = () => {
    const [showExperience, setShowExperience] = useState(false);
    const [showProjects, setShowProjects] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hidden: { scale: 0.8, opacity: 0, rotate: -10 },
        visible: {
            scale: 1,
            opacity: 1,
            rotate: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const cardVariants = {
        hidden: { scale: 0.8, opacity: 0, y: 30 },
        visible: {
            scale: 1,
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id={"about"}>
            <motion.h5
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                Get to know
            </motion.h5>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
            >
                About me
            </motion.h2>
            <motion.div 
                className={"container about__container"}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.div 
                    className={"about__me"}
                    variants={imageVariants}
                >
                    <div className={"about__me-image"}>
                        <motion.img 
                            src={ME} 
                            alt={"About Image"}
                            whileHover={{ 
                                scale: 1.05,
                                rotate: 2,
                                transition: { duration: 0.3 }
                            }}
                        />
                    </div>
                </motion.div>
                <div className="about__bottom-row">
                    <motion.div 
                        className={"about__cards"}
                        variants={containerVariants}
                    >
                        <motion.article 
                            className={'about__card experience__card'}
                            variants={cardVariants}
                            whileHover={{ 
                                scale: 1.05,
                                y: -10,
                                transition: { type: "spring", stiffness: 300 }
                            }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowExperience(true)}
                        >
                            <motion.div
                                animate={{ 
                                    rotateY: [0, 360],
                                    transition: { duration: 2, repeat: Infinity, ease: "linear" }
                                }}
                            >
                                <FaAward className={"about__icon"}/>
                            </motion.div>
                            <h5>Experience</h5>
                            <small>3+ Years</small>
                        </motion.article>
                        <motion.article 
                            className={'about__card project__card'}
                            variants={cardVariants}
                            whileHover={{ 
                                scale: 1.05,
                                y: -10,
                                transition: { type: "spring", stiffness: 300 }
                            }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowProjects(true)}
                        >
                            <motion.div
                                animate={{ 
                                    scale: [1, 1.2, 1],
                                    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                                }}
                            >
                                <VscFolderLibrary className={"about__icon"}/>
                            </motion.div>
                            <h5>Projects</h5>
                            <small>15+ Completed</small>
                        </motion.article>
                    </motion.div>
                    <motion.div 
                        className={"about__content"}
                        variants={itemVariants}
                    >
                        <motion.p
                            variants={itemVariants}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            I'm a recent B.Tech graduate in Computer Science and Engineering with a passion for AI, data science, and full-stack development. From building responsive web apps to optimizing machine learning models for real-world use cases, I strive to combine analytical thinking with creative expression. A problem-solver at heart, I’m constantly pushing the boundaries of what technology can do.
                        </motion.p>
                        <motion.a 
                            href={"#contact"} 
                            className={"btn btn-primary"}
                            variants={itemVariants}
                            whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 20px 40px rgba(0, 212, 255, 0.4)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Let's Talk
                        </motion.a>
                        <Popup show={showExperience} onClose={() => setShowExperience(false)}>
                            <React.Suspense fallback={<div>Loading...</div>}>
                                <LazyExperience />
                            </React.Suspense>
                        </Popup>
                        <Popup show={showProjects} onClose={() => setShowProjects(false)}>
                            <React.Suspense fallback={<div>Loading...</div>}>
                                <LazyProjects />
                            </React.Suspense>
                        </Popup>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default About