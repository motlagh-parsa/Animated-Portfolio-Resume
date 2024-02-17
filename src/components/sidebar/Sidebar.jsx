import {useState} from "react";
import {motion} from "framer-motion";
import Links from "./links/Links";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";

const variants = {
    open: {
        x:  0,
        transition: {
            stiffness:  100,
            damping:  10,
        },
    },
    closed: {
        x: "-100%",
        transition: {
            stiffness:  100,
            damping:  10,
        },
    },
};


const Sidebar = () => {
    const [open, setOpen] = useState(false);

    return (
        <motion.div className="sidebar" animate={open ? "open" : "closed"}>
            <motion.div className="bg" variants={variants} onMouseOver={() => setOpen(true)} onMouseLeave={() => setOpen(false)}
            >
                <Links/>
            </motion.div>
            <ToggleButton open={open} setOpen={setOpen}/>
        </motion.div>
    );
};

export default Sidebar;
