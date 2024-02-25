'use client';
import classes from './BackButton.module.scss';
import Link from 'next/link';

import gsap from "gsap";
import { useRef, useEffect } from "react";


export default function BackButton() {
    const buttonRef = useRef(null);

    useEffect(() => {
        gsap
            .to(buttonRef.current, {
                duration: 1,
                delay: 2,
                right: "60px",
                ease: "power4.inOut"
            });
    }, []);

    return (
        <Link href="/">
            <button ref={buttonRef} className={classes['back-button']}>
                <img src="/assets/arrow_back.svg" alt="Back" />
            </button>
        </Link>
    );
}