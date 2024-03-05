'use client';
import Link from "next/link";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { roboto, rubik } from '@/utils/fonts';
import classes from './Nav.module.scss';

import { useRef, useState } from 'react';

import {
    setInitialStatesforMoveLogo, moveLogoUp,
    setInitialStatesForSlideUp, slideLogoUp,
    setInitialStatesForFadeOutNavLinks, fadeOutNavLinks, fadeInNavLinks,
    moveLogoDownOnScroll
} from "./NavAnimations";


export default function Nav(props) {

    const headerRef = useRef(null);
    const stairsRef = useRef(null);

    const logoRefMobile = useRef(null);
    const logoRefDesktop = useRef(null);
    const column1 = useRef(null);
    const column2 = useRef(null);

    const mobileMenuRef = useRef(null);
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

    const desktopMenuRef = useRef(null);


    const openMenuHandler = () => {
        setMobileMenuIsOpen(true);
        const stairs = Array.from(stairsRef.current.children);
        gsap.set(stairs, { y: '-100vh', height: '100vh' });
        gsap.to(stairs, {
            y: '0',
            height: '100vh',
            stagger: -0.1,
            duration: 0.8,
            ease: "power3.inOut",
        });

        const menuItems = Array.from(mobileMenuRef.current.children);

        gsap.set(mobileMenuRef.current, {
            width: '100%',
            height: '100vh',
            duration: 0.1,
        })

        gsap.to(menuItems, {
            opacity: 1,
            delay: 0.6,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.inOut",
        })
    }

    const closeMenuHandler = () => {
        const stairs = Array.from(stairsRef.current.children);
        gsap.to(stairs, {
            y: '100vh',
            stagger: -0.1,
            duration: 0.8,
            delay: 0.4,
            ease: "power3.inOut",
        })
        setMobileMenuIsOpen(false);

        const menuItems = Array.from(mobileMenuRef.current.children);


        gsap.to(menuItems, {
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.inOut",
            onComplete: () => {
                gsap.set(mobileMenuRef.current, {
                    width: '0',
                    height: '0',
                    duration: 0.1,
                })
            }
        })
    }

    const createAnimations = () => {
        if (props.timeline && props.bottomHeading && props.main) {
            props.timeline
                .add(setInitialStatesforMoveLogo(headerRef.current))
                .add(setInitialStatesForFadeOutNavLinks(desktopMenuRef.current))
                .add(moveLogoUp(headerRef.current))
                .add(fadeOutNavLinks(desktopMenuRef.current, props.main))
                .add(moveLogoDownOnScroll(headerRef.current, headerRef.current.offsetHeight, props.bottomHeading))
                .add(fadeInNavLinks(desktopMenuRef.current, props.bottomHeading))
                .play()

            return props.timeline;
        } else if (props.timeline && props.slideUp) {
            console.log('slide up')
            props.timeline
                .add(setInitialStatesForSlideUp(logoRefDesktop.current, column1.current, column2.current))
                .add(slideLogoUp(logoRefDesktop.current, column1.current, column2.current))
                .play()

            return props.timeline;
        }
    }

    useGSAP(() => {
        let animation = createAnimations();

        setTimeout(() => { // Delayed refresh to ensure ScrollTrigger picks up the correct layout
            ScrollTrigger.refresh();
        }, 100);

        return () => {
            animation?.kill();
            ScrollTrigger.getById("project1")?.kill();
            ScrollTrigger.getById("project2")?.kill();
            ScrollTrigger.getById("project3")?.kill();
        };
    }, [props.bottomHeading, props.timeline]);

    return (
        <>
            <header
                ref={headerRef}
                className={`${classes['header-desktop']} ${props.top ? classes['top-position'] : props.bottom ? classes['bottom-position'] : props.slideUp ? classes.slideUp : ''}`}
            >

                <div className={classes.centered}>
                    <div className={`${classes['logo-wrapper-desktop']} ${roboto.className}`}>
                        <div ref={logoRefDesktop} className={classes.logo}><Link href="/" >VP</Link></div>
                    </div>

                    <div ref={desktopMenuRef} className={`${classes['menu-desktop']} ${rubik.className}`}>
                        <div ref={column1} className={classes.column}>
                            <nav className={classes.nav}>
                                <ul className={classes['nav-list']}>
                                    <li className={classes['nav-list-item']}><div>Veronika Petersen</div></li>
                                    <li className={classes['nav-list-item']}><div>Frontend Developer</div></li>
                                </ul>
                            </nav>
                        </div>

                        <div ref={column2} className={classes.column}>
                            <nav className={classes.nav}>
                                <ul className={classes['nav-list']}>
                                    <li className={`${classes['nav-list-item']}`}><a href="/">LinkedIn</a></li>
                                    <li className={`${classes['nav-list-item']}`}><a href="/">myemailhere@gmail.commmm</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

            <header className={`${classes['header-mobile']} `}>
                <div className={`${classes['logo-wrapper-mobile']} ${roboto.className}`}>
                    <div ref={logoRefMobile} className={classes.logo}><Link href="/" >VP</Link></div>
                </div>
                <div className={classes.burgerIconWrapper}>
                    <div className={classes.burgerIcon}>
                        {mobileMenuIsOpen ?
                            <div onClick={closeMenuHandler} className={classes.close}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                            </div> :
                            <div onClick={openMenuHandler} className={classes.open}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
                            </div>
                        }
                    </div>
                </div>
                <div ref={mobileMenuRef} className={`${classes['menu-mobile']} ${rubik.className}`}>
                    <div className={classes['menu-item']}>Veronika Petersen</div>
                    <div className={classes['menu-item']}>frontend developer</div>
                    <div className={classes['menu-item']}><a href="/sss">linkedin</a></div>
                    <div className={classes['menu-item']}><a href="/">myemailhere@gmail.com</a></div>
                </div>

                <div ref={stairsRef} className={classes.stairs}>
                    <div className={classes.stair}></div>
                    <div className={classes.stair}></div>
                    <div className={classes.stair}></div>
                    <div className={classes.stair}></div>
                    <div className={classes.stair}></div>
                </div>

            </header>
        </>
    )
}