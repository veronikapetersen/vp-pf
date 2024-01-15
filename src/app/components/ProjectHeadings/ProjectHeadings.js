'use client';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import classes from './ProjectHeadings.module.scss';
import { useRef, useEffect } from "react";

export function ProjectHeading1({ children }) {

    const titleRef = useRef(null);

    useEffect(() => {

        const title = titleRef.current;

        gsap.to(title, {
            translateY: "25%",
            scrollTrigger: {
                trigger: title,
                start: "top 40%",
                end: "top 20%",
                scrub: 1,
                // markers: true,
                toggleActions: "none play reverse none",
            }
        });

    }, [])

    return (
        <>
            <h1 ref={titleRef} className={`${classes['project-title']} ${classes['project-title--current']} ${classes.parallax}`}>{children}</h1>
        </>
    )
}

export function ProjectHeading2() {

    return (
        <>
            <div className={classes.pers}>
                <h2 className={`${classes['project-title']} ${classes['project-title--next']}`}>Project h2</h2>
            </div>
        </>
    )
}