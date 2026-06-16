import React from 'react';
import ShinyText from '../../../../../components/Navbar/reactbits/ShinyText/ShinyText';
import Classes from '../Hero.module.css';

export default function SubHeading() {
    return (
        <ShinyText
            text="Full Stack Developer · React.js · Spring Boot · PHP"
            disabled={false}
            speed={3}
            className={Classes.subHeadingCon}
        />
    );
}
