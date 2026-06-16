import React from 'react'
import Classes from './Hero.module.css'
import Heading from './comp/Heading.jsx'
import SubHeading from './comp/SubHeading.jsx'
import BottomToTop from '../../../../Animations/BottomToTop.jsx'
import { useNavigate } from 'react-router-dom'
// import BgScene from './comp/BgScene'
import Toolbar from './comp/Toolbar.jsx'
// import { StarBorder } from '@mui/icons-material'
import { motion } from 'framer-motion';
import AvatarsGroup from './comp/AvatarsGroup.jsx'
import ProjectsLoop from './comp/ProjectsLoop/ProjectsLoop.jsx'

export default function Hero() {
    const navigateTo = useNavigate();
    const redirectTo = (page) => {
        navigateTo(page);
    }

    return (
        <div id='hero' className={Classes.hero} >
            <div className={Classes.main} >
                <div className={Classes.content} >
                    <BottomToTop fromY={60} delay={0} duration={0.35}>
                        <Toolbar />
                    </BottomToTop>
                    <BottomToTop fromY={50} delay={0.05} duration={0.35}>
                        <div className={Classes.portraitFrame}>
                            <img
                                src="/images/keerthan.jpeg"
                                alt="Keerthan V portrait"
                                className={Classes.portraitImage}
                                draggable={false}
                            />
                        </div>
                    </BottomToTop>
                    <BottomToTop fromY={60} delay={0.1} duration={0.35}>
                        <Heading />
                    </BottomToTop>
                    <BottomToTop fromY={60} delay={0.15} duration={0.35}>
                        <SubHeading />
                    </BottomToTop>
                    <BottomToTop fromY={40} delay={0.2} duration={0.35}>
                        <div className={Classes.buttons} >
                            <button type='button' className={Classes.btn1} onClick={() => { redirectTo('/portfolio') }} > <h5>View our portfolio</h5> </button>
                            <a href="/resume.pdf" download="Keerthan_V_Resume.pdf">
                                <button type='button' className={Classes.btn3}> <h5>Download Resume</h5> </button>
                            </a>
                            <a
                                href="https://cal.com/evolvion/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button type='button' className={Classes.btn2}> <h5>Book a Call</h5> </button>
                            </a>
                        </div>
                    </BottomToTop>
                    <BottomToTop fromY={40} delay={0.2} duration={0.35}>
                        <AvatarsGroup />
                    </BottomToTop>
                </div>
            </div>
            <BottomToTop fromY={40} delay={0.3} duration={0.35}>
                <ProjectsLoop />
            </BottomToTop>

            <motion.div
                className={Classes.LeftBgGradient}
            />
            {/* <div className={Classes.RightBgGradient} ></div> */}
            {/* Old Spline Ring Scene */}
            <>
                {/* <BottomToTop fromY={0} delay={1.5} duration={0.5}> */}
                {/* <div className={Classes.splineBgCon} > */}
                {/* <iframe
                    src='https://my.spline.design/dunes-2ea1415c70da19c201f33da9268a0410/'
                    frameborder='0'
                    width='100%'
                    height='100%'
                ></iframe> */}
                {/* <iframe src='https://my.spline.design/spaceparticlesanimation-c3acd83275e18c33c70e85d9d198be8e/' frameborder='0' width='100%' height='100%'></iframe> */}
                {/* <iframe src='https://my.spline.design/glowingplanetparticles-a0c785ee0407074c17c66d95be23c018/' frameborder='0' width='100%' height='100%'></iframe> */}
                {/* <BgScene /> */}
                {/* </div> */}
                {/* </BottomToTop> */}
            </>
        </div>
    )
}
