'use client';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { archivo_black } from "@/utils/fonts";
import classes from './ProjectHeadings.module.scss';
import { useRef } from "react";

import Link from "next/link";

export function ProjectHeading1({ children }) {

    const titleRef = useRef(null);
    const wrapperRef = useRef(null);

    useGSAP(() => {

        const title = titleRef.current;

        gsap.to(title, {
            translateY: "25%",
            scrollTrigger: {
                trigger: title,
                start: "center 20%",
                end: "top 2%",
                scrub: 1,
                // markers: true,
                toggleActions: "none play reverse none",
            }
        });

    }, { scope: wrapperRef })

    return (
        <>
            <div ref={wrapperRef} className={`${classes['heading-wrapper']} ${archivo_black.className}`}>
                <h1 ref={titleRef} className={`${classes['project-title']} ${classes['project-title--current']} ${classes.parallax}`}>{children}</h1>
            </div>
        </>
    )
}

export function ProjectHeading2(props) {

    return (
        <>
            <div className={`${classes['heading-wrapper']} ${classes['heading-wrapper--next']} ${archivo_black.className}`}>

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