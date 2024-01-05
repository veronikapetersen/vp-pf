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
            <div className={classes.logo} >
                <div className={classes['logo-icon']}>&#129705;</div>
                <div className={classes['logo-text']}>VP</div>
            </div>

            <nav className={classes.nav}>
                <ul className={classes['nav-list']}>
                    <li className={classes['nav-list-item']}>
                        <a href="/">Home</a>
                    </li>
                    <li className={classes['nav-list-item']}>
                        <a href="/about">About</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
