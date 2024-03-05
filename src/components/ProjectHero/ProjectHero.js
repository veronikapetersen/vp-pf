import classes from './ProjectHero.module.scss';
import { ProjectHeading1 } from "@/components/ProjectHeadings/ProjectHeadings";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function ProjectHero({ title }) {

    const wrapperRef = useRef(null);
    const heroRef = useRef(null);
    useGSAP(() => {
        gsap.to(heroRef.current, {
            opacity: 1,
            duration: 1,
            ease: "power3.inOut",
        })
    }, { scope: wrapperRef });

    return (
        <div ref={wrapperRef} className={classes['project-hero']}>
            <div ref={heroRef} className={classes['project-hero__content']}>
                <div className={classes['project-hero__title']}>
                    <ProjectHeading1>{title}</ProjectHeading1>
                </div>
            </div>
        </div>
    );
}