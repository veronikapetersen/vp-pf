'use client';
import classes from "./Nav.module.scss";
import { useRef, useEffect } from "react";
import { setInitialStates, moveLogoDown, moveLogoUp } from "./NavAnimations";

export default function Nav({ timeline, top }) {

    const logoRef = useRef(null);

    useEffect(() => {

        if (timeline && top) {
            timeline
                .add(setInitialStates(logoRef.current))
                .add(moveLogoDown(logoRef.current, logoRef.current.offsetHeight))
                .play()
        } else if (timeline && !top) {
            timeline
                .add(setInitialStates(logoRef.current))
                .add(moveLogoUp(logoRef.current))
                .play()
        }

    }, [timeline])

    return (
        <header className={`${classes.header} ${top ? classes['top-position'] : classes['bottom-position']}`} ref={logoRef}>

            <div>
                <div className={classes.logo}>VP</div>
            </div>

            <div className={classes.row}>
                <div className={classes.column}>
                    <nav className={classes.nav}>
                        <ul className={classes['nav-list']}>
                            <li className={classes['nav-list-item']}>
                                <div>Veronika Petersen</div>
                            </li>
                            <li className={classes['nav-list-item']}>
                                <div>Frontend Developer</div>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className={classes.column}>
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

                <div className={classes.column}>
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
