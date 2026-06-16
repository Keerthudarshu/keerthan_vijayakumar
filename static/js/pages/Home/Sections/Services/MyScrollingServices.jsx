import React from 'react';
import { motion } from 'framer-motion';
import classes from './Services.module.css';
import {
    SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiExpress,
    SiSpringboot, SiPhp, SiHtml5, SiCss, SiBootstrap,
    SiMysql, SiPostgresql,
    SiGit, SiGithub, SiBitbucket,
    SiCplusplus, SiVercel
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { TbBrandAws } from 'react-icons/tb';

const SKILL_CATEGORIES = [
    {
        title: 'Languages',
        skills: [
            { name: 'Java', icon: <FaJava />, color: '#f89820' },
            { name: 'JavaScript', icon: <SiJavascript />, color: '#f7df1e' },
            { name: 'PHP', icon: <SiPhp />, color: '#777bb4' },
            { name: 'HTML5', icon: <SiHtml5 />, color: '#e34f26' },
            { name: 'CSS3', icon: <SiCss />, color: '#1572b6' },
            { name: 'C++', icon: <SiCplusplus />, color: '#00599c' },
        ],
    },
    {
        title: 'Frameworks',
        skills: [
            { name: 'React.js', icon: <SiReact />, color: '#61dafb' },
            { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff' },
            { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6db33f' },
            { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
            { name: 'Express.js', icon: <SiExpress />, color: '#ffffff' },
            { name: 'Bootstrap', icon: <SiBootstrap />, color: '#7952b3' },
        ],
    },
    {
        title: 'Databases',
        skills: [
            { name: 'MySQL', icon: <SiMysql />, color: '#4479a1' },
            { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
        ],
    },
    {
        title: 'Tools & Cloud',
        skills: [
            { name: 'Git', icon: <SiGit />, color: '#f05032' },
            { name: 'GitHub', icon: <SiGithub />, color: '#ffffff' },
            { name: 'Bitbucket', icon: <SiBitbucket />, color: '#0052cc' },
            { name: 'VS Code', icon: <VscVscode />, color: '#007acc' },
            { name: 'AWS EC2', icon: <TbBrandAws />, color: '#ff9900' },
            { name: 'Vercel', icon: <SiVercel />, color: '#ffffff' },
        ],
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.04 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function SkillsGrid() {
    return (
        <div className={classes.skillsWrapper}>
            {SKILL_CATEGORIES.map((category) => (
                <div key={category.title}>
                    <p className={classes.categoryTitle}>{category.title}</p>
                    <motion.div
                        className={classes.skillsGrid}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {category.skills.map((skill) => (
                            <motion.div
                                key={skill.name}
                                className={classes.skillCard}
                                variants={cardVariants}
                                whileHover={{ scale: 1.05, y: -4 }}
                            >
                                <span
                                    className={classes.skillIcon}
                                    style={{ color: skill.color }}
                                >
                                    {skill.icon}
                                </span>
                                <span className={classes.skillName}>{skill.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            ))}
        </div>
    );
}
