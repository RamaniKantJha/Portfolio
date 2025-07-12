import React, {useRef} from 'react'
import './Contact.css'
import {MdOutlineEmail} from "react-icons/md";
import {RiMessengerLine} from "react-icons/ri";
import {IoLogoWhatsapp} from "react-icons/io";
import emailjs from "emailjs-com";
import { motion } from 'framer-motion';

const Contact = () => {
    const form = useRef();
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
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_lddsncb', 'template_7yafkxb', form.current, '-8vleYFkC82JPaX9G')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    return (
        <motion.section id={"contact"}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.h5 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>Get in Touch</motion.h5>
            <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>Contact</motion.h2>
            <div className={"container contact__container"}>
                <motion.div className={"contact__options"} variants={cardVariants}>
                    <article className={"contact__option"}>
                        <MdOutlineEmail className={"contact__option-icon"}/>
                        <h4>Email</h4>
                        <h5>ramanikant01@gmail.com</h5>
                        <a href={"mailto:ramanikant01@gmail.com"} target={'_blank'} rel="noreferrer noopener">Send a Message</a>
                    </article>
                    <article className={"contact__option"}>
                        <RiMessengerLine className={"contact__option-icon"}/>
                        <h4>Messenger</h4>
                        <h5>Ramani Kant Jha</h5>
                        <a href={"https://www.messenger.com/"} target={'_blank'} rel="noreferrer noopener">Send a Message</a>
                    </article>
                    <article className={"contact__option"}>
                        <IoLogoWhatsapp className={"contact__option-icon"}/>
                        <h4>Whatsapp</h4>
                        <h5>+91 7840030847</h5>
                        <a href={"https://api.whatsapp.com/phone=+917840030847"} target={'_blank'} rel="noreferrer noopener">Send a Message</a>
                    </article>
                </motion.div>
                <motion.form ref={form} onSubmit={sendEmail} variants={cardVariants}>
                    <input type={"text"} name={"name"} placeholder={"Your Full name"} required/>
                    <input type={"email"} name={"email"} placeholder={"Your Email"} required/>
                    <textarea name={"message"} placeholder={"Your Message"} rows={"7"} required></textarea>
                    <button type={"submit"} className={"btn btn-primary"}>Send Message</button>
                </motion.form>
            </div>
        </motion.section>
    )
}

export default Contact