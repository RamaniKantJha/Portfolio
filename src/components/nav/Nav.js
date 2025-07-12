import './Nav.css'
import {AiOutlineHome, AiOutlineMessage, AiOutlineUser} from "react-icons/ai";
import {RiServiceLine} from "react-icons/ri";
import {useState} from "react";
import { motion } from "framer-motion";

const Nav = () => {

    const [activeNav, setActiveNav] = useState('#');

    const navVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delayChildren: 0.2,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.3, ease: "easeOut" }
        }
    };

    return (
        <motion.nav
            variants={navVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.a 
                href={"#"} 
                className={activeNav === '#' ? 'active' : ''} 
                onClick={ () => setActiveNav('#') }
                variants={itemVariants}
                whileHover={{ 
                    scale: 1.2, 
                    rotate: 5,
                    transition: { type: "spring", stiffness: 300 }
                }}
                whileTap={{ scale: 0.9 }}
                animate={activeNav === '#' ? "active" : "inactive"}
            >
                <motion.div
                    animate={activeNav === '#' ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <AiOutlineHome />
                </motion.div>
            </motion.a>
            
            <motion.a 
                href={"#about"} 
                className={activeNav === 'about' ? 'active' : ''} 
                onClick={ () => setActiveNav('about') }
                variants={itemVariants}
                whileHover={{ 
                    scale: 1.2, 
                    rotate: -5,
                    transition: { type: "spring", stiffness: 300 }
                }}
                whileTap={{ scale: 0.9 }}
                animate={activeNav === 'about' ? "active" : "inactive"}
            >
                <motion.div
                    animate={activeNav === 'about' ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <AiOutlineUser />
                </motion.div>
            </motion.a>
            
            <motion.a 
                href={"#services"} 
                className={activeNav === 'services' ? 'active' : ''} 
                onClick={ () => setActiveNav('services') }
                variants={itemVariants}
                whileHover={{ 
                    scale: 1.2, 
                    rotate: -5,
                    transition: { type: "spring", stiffness: 300 }
                }}
                whileTap={{ scale: 0.9 }}
                animate={activeNav === 'services' ? "active" : "inactive"}
            >
                <motion.div
                    animate={activeNav === 'services' ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <RiServiceLine />
                </motion.div>
            </motion.a>
            
            <motion.a 
                href={"#contact"} 
                className={activeNav === 'contact' ? 'active' : ''} 
                onClick={ () => setActiveNav('contact') }
                variants={itemVariants}
                whileHover={{ 
                    scale: 1.2, 
                    rotate: 5,
                    transition: { type: "spring", stiffness: 300 }
                }}
                whileTap={{ scale: 0.9 }}
                animate={activeNav === 'contact' ? "active" : "inactive"}
            >
                <motion.div
                    animate={activeNav === 'contact' ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <AiOutlineMessage />
                </motion.div>
            </motion.a>
        </motion.nav>
    )
}

export default Nav