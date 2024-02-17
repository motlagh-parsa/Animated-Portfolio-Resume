import {motion} from "framer-motion";
import {FaEnvelope} from 'react-icons/fa';
import {HiHome} from "react-icons/hi2";
import {PiBagFill} from "react-icons/pi";
import {BiSolidBulb} from "react-icons/bi";

const variants = {
    open: {
        transition: {
            staggerChildren: 0, // All children animate at the same time
        },
    },
    closed: {
        transition: {
            staggerChildren: 0, // All children animate at the same time
            staggerDirection: -1,
        },
    },
};

const itemVariants = {
    open: {
        x: 0,
        opacity: 1,
    },
    closed: {
        x: "-100%",
        opacity: 0,
    },
};

const Links = () => {
    const items = [
        {name: "Homepage", icon: <HiHome/>},
        {name: "Services", icon: <BiSolidBulb/>},
        {name: "Portfolio", icon: <PiBagFill/>},
        {name: "Contact", icon: <FaEnvelope/>},
    ];

    return (
        <motion.div className="links" variants={variants}>
            {items.map((item, index) => (
                <motion.a
                    href={`#${item.name}`}
                    key={index}
                    variants={itemVariants}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.95}}
                >
                    {item.icon}
                </motion.a>
            ))}
        </motion.div>
    );
};

export default Links;
