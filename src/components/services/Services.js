import './Services.css'
import {BsCheck2} from "react-icons/bs";
import { motion } from 'framer-motion';

const Services = () => {
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
        <motion.section id={"services"}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.h5 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>What I Offer</motion.h5>
            <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>Services</motion.h2>
            <div className={"container services__container"}>
                {[...Array(3)].map((_, i) => (
                    <motion.article
                        key={i}
                        className={"service"}
                        variants={cardVariants}
                    >
                        <div className={"service__head"}>
                            <h3>{["UI/UX Design", "Web Development", "Content Creation"][i]}</h3>
                        </div>
                        <ul className={"service__list"}>
                            {i === 0 && [
                                "Wireframing and prototyping interactive user interfaces.",
                                "Designing modern, responsive layouts for web and mobile.",
                                "User research, persona creation, and journey mapping.",
                                "UI kits and design systems for scalable products.",
                                "Usability testing and iterative design improvements."
                            ].map((txt, idx) => (
                                <li key={idx}><BsCheck2 className={"service__list-icon"} /><p>{txt}</p></li>
                            ))}
                            {i === 1 && [
                                "Building fast, responsive, and accessible web applications.",
                                "Fullstack development with React, Python, and modern frameworks.",
                                "RESTful API design and integration.",
                                "Database modeling and management (MySQL, DBMS).",
                                "Deployment, CI/CD, and cloud hosting solutions."
                            ].map((txt, idx) => (
                                <li key={idx}><BsCheck2 className={"service__list-icon"} /><p>{txt}</p></li>
                            ))}
                            {i === 2 && [
                                "Technical blogging and documentation for developers.",
                                "Creating educational tutorials and coding walkthroughs.",
                                "Video content for tech, coding, and data science topics.",
                                "Infographics and visual content for social media.",
                                "Open-source contributions and project showcases."
                            ].map((txt, idx) => (
                                <li key={idx}><BsCheck2 className={"service__list-icon"} /><p>{txt}</p></li>
                            ))}
                        </ul>
                    </motion.article>
                ))}
            </div>
        </motion.section>
    )
}

export default Services