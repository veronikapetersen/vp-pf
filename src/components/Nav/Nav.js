'use client';
import React from "react";
import classes from "./Nav.module.scss";
import { useRef, useEffect } from "react";
import Link from "next/link";
import { setInitialStatesforMoveLogo, moveLogoDown, moveLogoUp, setInitialStatesForSlideUp, slideLogoUp, setInitialStatesForFadeOutNavLinks, fadeOutNavLinks } from "./NavAnimations";

export default function Nav(props) {


    const headerRef = useRef(null);
    const logoRef = useRef(null);
    const columnsRef = useRef(null);
    const column1 = useRef(null);
    const column2 = useRef(null);
    const column3 = useRef(null);

    console.log(columnsRef.current)


    useEffect(() => {

        if (props.timeline && props.top) {
            props.timeline
                .add(setInitialStatesforMoveLogo(headerRef.current))
                .add(moveLogoDown(headerRef.current, headerRef.current.offsetHeight))
                .play()
        } else if (props.timeline && props.bottom && !props.fadeOutNavLinks) {
            props.timeline
                .add(setInitialStatesforMoveLogo(headerRef.current))
                .add(moveLogoUp(headerRef.current))
                .play()
        } else if (props.timeline && props.slideUp) {
            props.timeline
                .add(setInitialStatesForSlideUp(logoRef.current, column1.current, column2.current, column3.current))
                .add(slideLogoUp(logoRef.current, column1.current, column2.current, column3.current))
                .play()
        } else if (props.timeline && props.bottom && props.fadeOutNavLinks) {
            props.timeline
                .add(setInitialStatesforMoveLogo(headerRef.current))
                .add(setInitialStatesForFadeOutNavLinks(columnsRef.current))
                .add(moveLogoUp(headerRef.current))
                .add(fadeOutNavLinks(columnsRef.current, props.main))
                .play()
        }

    }, [props.timeline])

    return (
        <header
            ref={headerRef}
            className={`${classes.header} ${props.top ? classes['top-position'] : props.bottom ? classes['bottom-position'] : props.slideUp ? classes.slideUp : ''}`}
        >
            <div className={classes['logo-wrapper']}>
                <div ref={logoRef} className={classes.logo}>
                    <Link href="/" >VP</Link></div>
            </div>

            {/* <div ref={ref} className={classes.row}> */}
            <div ref={columnsRef} className={classes.row}>
                <div ref={column1} className={classes.column}>
                    <nav className={classes.nav}>
                        <ul className={classes['nav-list']}>
                            <li className={classes['nav-list-item']}>
                                <div>Veronika Veronika</div>
                            </li>
                            <li className={classes['nav-list-item']}>
                                <div>Frontend Developer</div>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div ref={column2} className={classes.column}>
                    <nav className={classes.nav}>
                        <ul className={classes['nav-list']}>
                            <li className={classes['nav-list-item']}>
                                <a href="/">CV/Experience</a>
                            </li>
                            <li className={classes['nav-list-item']}>
                                <a href="/about">LinkedIn</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div ref={column3} className={classes.column}>
                    <nav className={classes.nav}>
                        <ul className={classes['nav-list']}>
                            <li className={classes['nav-list-item']}>
                                <a href="/">myemailhere@gmail.com</a>
                            </li>
                            <li className={classes['nav-list-item']}>
                                <a href="/about">+45 xxxx xxxx</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        </header>
    )
}