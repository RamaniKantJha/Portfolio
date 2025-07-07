import './Header.css'
import CTA from "./CTA";
import ME from "../../assets/me.png"
import Socials from "./Socials";
import { motion } from "framer-motion";

const Header = () => {
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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.5
            }
        }
    };

    const floatingVariants = {
        animate: {
            y: [0, -20, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <header>
            <motion.div 
                className={"container header__container"}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h5 variants={itemVariants}>Hello I'm</motion.h5>
                <motion.h1 
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    Ramani Kant Jha
                </motion.h1>
                <motion.h5 
                    className={"text-light"}
                    variants={itemVariants}
                >
                    Fullstack Developer
                </motion.h5>
                
                <motion.div variants={itemVariants}>
                    <CTA />
                </motion.div>

                <motion.div variants={itemVariants}>
                    <Socials />
                </motion.div>

                <motion.div 
                    className={"me"}
                    variants={imageVariants}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <motion.img 
                        src={ME} 
                        alt={"me"}
                        variants={floatingVariants}
                        animate="animate"
                    />
                </motion.div>

                <motion.a 
                    href={"#contact"} 
                    className={"scroll__down"}
                    variants={itemVariants}
                    whileHover={{ 
                        scale: 1.1,
                        color: "#00d4ff",
                        textShadow: "0 0 10px #00d4ff"
                    }}
                    animate={{
                        y: [0, 10, 0],
                        transition: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                >
                    Scroll to Bottom
                </motion.a>

            </motion.div>
        </header>
    )
}

export default Header