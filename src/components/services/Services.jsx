import {useRef} from "react";
import "./services.scss";
import {motion, useInView} from "framer-motion";

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const Services = () => {
    const ref = useRef();

    const isInView = useInView(ref, {margin: "-100px"});

    return (
        <motion.div
            className="services"
            variants={variants}
            initial="initial"
            // animate="animate"
            // whileInView="animate"
            ref={ref}
            animate={"animate"}
        >
            <motion.div className="textContainer" variants={variants}>
                <p>
                    I focus on helping your project grow
                    <br/> and move forward
                </p>
                <hr/>
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt=""/>
                    <h1>
                        <motion.b whileHover={{color: "orange"}}>Soft </motion.b>
                        skills
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{color: "orange"}}>Your Business </motion.b>
                        need.
                    </h1>
                    <button>WHAT WE DO?</button>
                </div>
            </motion.div>

            <motion.div className="listContainer" variants={variants}>

                <motion.div
                    className="box"
                    whileHover={{background: "lightgray", color: "black"}}
                >
                    <h2>Self-learning</h2>
                    <p>
                        Having the skill of self-learning can greatly benefit a developer at their workplace.
                        Life-long self-learning can equip them with the ability to identify problems and quickly look
                        for effective solutions on their own.
                    </p>
                    <a href={'https://ilovecoding.org/blog/how-to-become-a-self-taught-developer'} target='_blank'>
                        Read Article
                    </a>
                </motion.div>

                <motion.div
                    className="box"
                    whileHover={{background: "lightgray", color: "black"}}
                >
                    <h2>Problem-Solving</h2>
                    <p>
                        Problem-solving and critical thinking skills are paramount to software development as a whole.
                        Out of every other soft skill, this one, in particular,
                        will have the greatest effect on how your developer tackles complex issues and to what extent
                        they’re thinking outside the box.
                    </p>
                    <a href={'https://arc.dev/developer-blog/problem-solving-skills/'} target='_blank'>
                        Read Article
                    </a>
                </motion.div>

                <motion.div
                    className="box"
                    whileHover={{background: "lightgray", color: "black"}}
                >
                    <h2>Teamwork</h2>
                    <p>
                        Knowing how to collaborate on a team goes hand-in-hand with having excellent communication
                        skills.
                        Software development has always been a team sport. Even if a developer is working alone,
                        they still have to communicate with designers, project managers, customers, and more.
                    </p>
                    <a href={'https://www.shakebugs.com/blog/collaboration-in-software-development/'} target='_blank'>
                        Read Article
                    </a>
                </motion.div>

                <motion.div
                    className="box"
                    whileHover={{background: "lightgray", color: "black"}}
                >
                    <h2>Adaptability</h2>
                    <p>
                        Maintaining adaptability is essential for software developers as it helps them
                        to respond quickly and effectively to modern changes in the technology, industry, and project
                        requirements.
                        Adaptability makes the developer flexible, open-minded, and being adjustable to modern
                        situations, approaches, and technologies.
                    </p>
                    <a href={'https://www.tiny.cloud/blog/software-developer-qualities-adaptability/'} target='_blank'>
                        Read Article
                    </a>
                </motion.div>

                <motion.div
                    className="box"
                    whileHover={{background: "lightgray", color: "black"}}
                >
                    <h2>Creativity</h2>
                    <p>
                        Creativity starts with a problem:
                        Creativity in software development is not just about coming up with novel ideas;
                        it's about finding solutions to real-world problems.
                        As developers, we must deeply understand the problem we're trying to solve before we can start
                        generating creative solutions.
                    </p>
                    <a href={'https://medium.com/@MrMiguelFeliciano/the-art-of-creative-problem-solving-in-software-development-4e7c94c53e78#:~:text=Creativity%20starts%20with%20a%20problem,can%20start%20generating%20creative%20solutions.'}
                       target='_blank'>
                        Read Article
                    </a>
                </motion.div>

            </motion.div>
        </motion.div>
    );
};

export default Services;
