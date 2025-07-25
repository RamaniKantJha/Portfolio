import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiDribbble} from "react-icons/fi";
import { motion } from "framer-motion";

const Socials = () => {
    const containerVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                delay: 1,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20, scale: 0 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    // Animation for all icons: continuous 3D rotation
    const iconAnimation = {
        animate: {
            rotateY: [0, 360],
            transition: { duration: 3, repeat: Infinity, ease: "linear" }
        }
    };

    return (
        <motion.div 
            className={"header__socials"}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.a 
                href={"https://linkedin.com"} 
                target={"_blank"} 
                rel={"noreferrer"}
                variants={itemVariants}
                whileHover={{ 
                    scale: 1.2,
                    rotate: 15,
                    color: "#0077b5",
                    transition: { type: "spring", stiffness: 300 }
                }}
                whileTap={{ scale: 0.9 }}
            >
                <motion.div {...iconAnimation}>
                    <BsLinkedin />
                </motion.div>
            </motion.a>
            
            <motion.a 
                href={"https://github.com"} 
                target={"_blank"} 
                rel={"noreferrer"}
                variants={itemVariants}
                whileHover={{ 
                    scale: 1.2,
                    rotate: -15,
                    color: "#333",
                    transition: { type: "spring", stiffness: 300 }
                }}
                whileTap={{ scale: 0.9 }}
            >
                <motion.div {...iconAnimation}>
                    <FaGithub />
                </motion.div>
            </motion.a>
            
            <motion.a 
                href={"https://dribbble.com"} 
                target={"_blank"} 
                rel={"noreferrer"}
                variants={itemVariants}
                whileHover={{ 
                    scale: 1.2,
                    rotate: 15,
                    color: "#ea4c89",
                    transition: { type: "spring", stiffness: 300 }
                }}
                whileTap={{ scale: 0.9 }}
            >
                <motion.div {...iconAnimation}>
                    <FiDribbble />
                </motion.div>
            </motion.a>
        </motion.div>
    )
}

export default Socials