import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import {motion} from "framer-motion";

const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar/>
            <div className="wrapper">
                <motion.span
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                >
                    My Resume
                </motion.span>
                <div className="social">

                    <motion.div
                        whileHover={{scale: [null, 1.5, 1.4]}}
                        transition={{duration: 0.3}}
                        initial={{opacity: 0, scale: 0.5}}
                        animate={{opacity: 1, scale: 1}}
                    >
                        <a href="https://github.com/motlagh-parsa" target='_blank'>
                            <img src="/gitHub%20Icon%20(2).png" alt="GitHub" title={"GitHub"}/>
                        </a>
                    </motion.div>

                    <motion.div
                        whileHover={{scale: [null, 1.5, 1.4]}}
                        transition={{duration: 0.3}}
                        initial={{opacity: 0, scale: 0.5}}
                        animate={{opacity: 1, scale: 1}}
                    >
                        <a href="https://linkedin.com/in/parsa-motlagh-aa095b248" target='_blank'>
                            <img src="/Linked%20in%20Icon.png" alt="LinkedIn" title={"LinkedIn"}
                                 style={{width: '35px', height: '35px', marginTop:'-15%'}}/>
                        </a>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;
