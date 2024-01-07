'use client';
import gsap from 'gsap';
import classes from './SlideInHeading.module.scss';
import { useRef, useEffect } from "react";
import { setInitialStates, fromLeftToRight } from './SlideInAnimation';

export default function SlideInHeading() {

    const tl = gsap.timeline();

    const heading1Ref = useRef(null);
    const heading2Ref = useRef(null);

    useEffect(() => {
        tl
            .add(setInitialStates(heading1Ref.current))
            .add(fromLeftToRight(heading1Ref.current))
            .play()
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