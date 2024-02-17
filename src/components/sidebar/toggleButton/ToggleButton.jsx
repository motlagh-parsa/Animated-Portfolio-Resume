import {motion} from "framer-motion";
import {PiCaretRightDuotone, PiCaretLeftDuotone} from "react-icons/pi";

const ToggleButton = ({setOpen, open}) => {
    return (
        <button style={{color: 'white'}}
                onMouseOver={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                onTouchStart={() => setOpen(!open)}
        >
            <button style={{
                left: '6px',
                color: 'white',
                backgroundColor: '#D3D3D3',
                height: '10%',
                top: '45%',
                borderRadius: '0px 50px 50px 0px'
            }}/>
            {/*</button>*/}
            {/*<svg width="23" height="23" viewBox="0 0 23 23">*/}
            {/*  <motion.path*/}
            {/*    strokeWidth="3"*/}
            {/*    stroke="black"*/}
            {/*    strokeLinecap="round"*/}
            {/*    variants={{*/}
            {/*      closed: { d: "M 2 2.5 L 20 2.5" },*/}
            {/*      open: { d: "M 3 16.5 L 17 2.5" },*/}
            {/*    }}*/}
            {/*  />*/}
            {/*  <motion.path*/}
            {/*    strokeWidth="3"*/}
            {/*    stroke="black"*/}
            {/*    strokeLinecap="round"*/}
            {/*    d="M 2 9.423 L 20 9.423"*/}
            {/*    variants={{*/}
            {/*      closed: { opacity: 1 },*/}
            {/*      open: { opacity: 0 },*/}
            {/*    }}*/}
            {/*  />*/}
            {/*  <motion.path*/}
            {/*    strokeWidth="3"*/}
            {/*    stroke="black"*/}
            {/*    strokeLinecap="round"*/}
            {/*    variants={{*/}
            {/*      closed: { d: "M 2 16.346 L 20 16.346" },*/}
            {/*      open: { d: "M 3 2.5 L 17 16.346" },*/}
            {/*    }}*/}
            {/*  />*/}
            {/*</svg>*/}
        </button>
    );
};

export default ToggleButton;
