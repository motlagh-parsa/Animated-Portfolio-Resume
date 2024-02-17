import {useRef} from "react";
import "./portfolio.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
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
    // {
    //     id: 3,
    //     title: "Vanilla JS App",
    //     img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    // },
    // {
    //     id: 4,
    //     title: "Music App",
    //     img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    // },
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
                    <div className={imgContainer} ref={ref}>
                        <img src={item.img} alt=""/>
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        {!(item.id === 1) &&
                        <a href={item.git} target={'_blank'}>Link to GitHub</a>
                        }
                    </motion.div>
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