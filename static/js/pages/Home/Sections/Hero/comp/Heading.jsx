import React from 'react';
import Classes from '../Hero.module.css';
import GradientText from '../../../../../components/Navbar/reactbits/TextAnimations/GradientText/GradientText';

export default function Heading() {
    return (
        <div className={Classes.headingCon}>
            <GradientText
                colors={["#7e27ff", "#d0a0fc", "#8839ffff", "#d0a0fc", "#8839ffff"]}
                animationSpeed={10}
                showBorder={false}
                className="custom-class"
            >
                <h1>Keerthan V</h1>
            </GradientText>
        </div>
    );
}
