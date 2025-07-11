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
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <motion.div 
                    className={"container header__container"}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
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
                        AI/ML Intern
                    </motion.h5>
                    <motion.div variants={itemVariants} style={{ marginBottom: 15 }}>
                        <CTA />
                    </motion.div>
                </motion.div>
                <motion.div 
                    className={"me"}
                    variants={imageVariants}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    style={{ alignSelf: 'flex-end', marginLeft: '2rem' }}
                >
                    <motion.img 
                        src={ME} 
                        alt={"me"}
                        variants={floatingVariants}
                        animate="animate"
                    />
                </motion.div>
            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <motion.a 
                    href={"#footer"} 
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
            </div>
            {/* Socials, Avatar, and Scroll to Bottom are now direct children of header */}
            <Socials />
        </header>
    )
}

export default Header