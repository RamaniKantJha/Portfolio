import CV from '../../assets/cv.pdf';
import { motion } from "framer-motion";

const CTA = () => {
    const buttonVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20
            }
        }
    };

    return (
        <motion.div 
            className={"CTA"}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
        >
            <motion.a 
                href={CV} 
                download 
                className={"btn"}
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0, 212, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
            >
                <motion.span
                    animate={{ 
                        textShadow: ["0 0 0px #00d4ff", "0 0 10px #00d4ff", "0 0 0px #00d4ff"],
                        transition: { duration: 2, repeat: Infinity }
                    }}
                >
                    Download CV
                </motion.span>
            </motion.a>
            
            <motion.a 
                href={"#contact"} 
                className={"btn btn-primary"}
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ 
                    scale: 1.05,
                    rotate: 2,
                    boxShadow: "0 20px 40px rgba(255, 107, 107, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
            >
                <motion.span
                    animate={{ 
                        scale: [1, 1.05, 1],
                        transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                >
                    Let's Talk
                </motion.span>
            </motion.a>
        </motion.div>
    )
}

export default CTA