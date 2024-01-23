'use client';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import classes from './ProjectHeadings.module.scss';
import { useRef, useEffect } from "react";

import Link from "next/link";

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
            <div className={classes['heading-wrapper']}>
                <h1 ref={titleRef} className={`${classes['project-title']} ${classes['project-title--current']} ${classes.parallax}`}>{children}</h1>
            </div>
        </>
    )
}

export function ProjectHeading2(props) {

    return (
        <>

            <div className={`${classes['heading-wrapper']} ${classes['heading-wrapper--next']}`}>

                <div className={classes['subheading']}>Next project</div>

                <div className={classes.pers}>
                    <h2 className={`${classes['project-title']} ${classes['project-title--next']}`}>
                        <Link href={`/projects/${props.slug}`}> {props.heading} </Link>
                    </h2>
                </div>
            </div>
        </>
    )
}