import {useRef} from "react";
import "./portfolio.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
// import {sc} from '/../../public/Screenshot 2024-02-17 185051.png'
// import {rahvar-png.png} from

const items = [
    {
        id: 1,
        title: "Rahvar",
        img: '/rahvar-png.png',
        desc: "Redesigning and reengineering plate numbering, penalty, plate changing and all services for traffic and plate numbering centers with much faster performance and user-friendly UI/UX in high data converting in Parsa company. This system be used only privately by Rahvar and traffic police.",
    },
    {
        id: 2,
        title: "Vans",
        img: "/beach-bum.png",
        desc: "A project with simple back-end implemented via Mirage.js in front-end, which focus on React Router Dom 6.4 version concepts and features, that very suitable for starting and learning router",
        git: 'https://github.com/motlagh-parsa/Vans'
    },
    {
        id: 3,
        title: "Task Management",
        img: '/../../public/Screenshot 2024-02-17 190115.png',
        desc: "A very simple and user friendly application that all users can work with it. Unfortunately this project has never done, but as soon as possible I am going to have a massive update on it to change the UI/UX and functionality",
        git: 'https://github.com/motlagh-parsa/task'
    },
    {
        id: 4,
        title: "Animated Portfolio Resume",
        desc: "If you like, you can also see and use the code I have written fot this animated portfolio resume with framer motion at my github via the below link.",
        git: 'https://github.com/motlagh-parsa/motlagh-parsa-Animated-Portfolio-Resume'
    },
];

const Single = ({item}) => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    let imgContainer = ''
    item.id === 1 ? imgContainer = 'imageContainerRahvar' : imgContainer = 'imageContainer'

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    {item.id !== 3
                        ?
                        <div className={imgContainer} ref={ref}>
                            {item.id !== 4 &&
                                <img src={item.img} alt=""/>
                            }
                        </div>
                        :
                        <div ref={ref}>
                            <img
                                style={{height:'90%', width:'100%', marginTop:'8%'}}
                                src={item.img} alt=""/>
                        </div>
                    }
                    {item.id !== 4 ?
                        <motion.div className="textContainer" style={{y}}>
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>

                            {!(item.id === 1) &&
                                <a href={item.git} target={'_blank'}>Link to GitHub</a>
                            }
                        </motion.div>
                        :
                        <motion.div className="textContainer2">
                            <h2>{item.title}</h2>
                            <p style={{textAlign: 'center'}}>{item.desc}</p>
                            {!(item.id === 1) &&
                                <a href={item.git} target={'_blank'}>Link to GitHub</a>
                            }
                        </motion.div>
                    }
                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{scaleX}} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id}/>
            ))}
        </div>
    );
};

export default Portfolio;
