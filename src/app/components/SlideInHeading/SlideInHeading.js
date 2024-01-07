'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import classes from './SlideInHeading.module.scss';
import { useRef, useEffect } from "react";

export default function SlideInHeading() {

    const heading1Ref = useRef(null);
    const heading2Ref = useRef(null);

    useEffect(() => {

        const heading1 = heading1Ref.current;
        const heading2 = heading2Ref.current

        gsap.to(heading1, {
            left: "40%",
            scrollTrigger: {
                trigger: heading1,
                start: "top 99%",
                end: "top 1%",
                scrub: 1,
                markers: true,
                toggleActions: "none play reverse none",
            }
        });

        gsap.to(heading2, {
            right: "40%",
            scrollTrigger: {
                trigger: heading2,
                start: "top 99%",
                end: "top 1%",
                scrub: 1,
                markers: true,
                toggleActions: "none play reverse none",
            }
        });

    }, [])

    return (
        <div className={classes.container}>
            <h1 className={classes.heading}>
                <div className={classes['heading1']}><span ref={heading1Ref}>Slide In</span></div>
                <div className={classes['heading2']}><span ref={heading2Ref}>Heading</span></div>
            </h1>
        </div>
    );
}