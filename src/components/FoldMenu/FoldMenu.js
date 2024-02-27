import Link from "next/link";
import gsap from 'gsap';

import { roboto, rubik } from '@/utils/fonts';
import classes from './FoldMenu.module.scss';

import { useEffect, useRef, useState } from 'react';

export default function FoldMenu() {


    const stairsRef = useRef(null);
    const menuRef = useRef(null);
    const [menuIsOpen, setMenuIsOpen] = useState(false);



    const logoRef = useRef(null);
    const column1 = useRef(null);
    const column2 = useRef(null);

    const mobileMenuRef = useRef(null);
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

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

    return (
        <header className={classes.header}>
            <div className={`${classes['logo-wrapper']} ${roboto.className}`}>
                <div ref={logoRef} className={classes.logo}><Link href="/" >VP</Link></div>
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


            <div ref={menuRef} className={classes.menu}>
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
                                <a href="/">LinkedIn</a>
                            </li>
                            <li className={`${classes['nav-list-item']} ${classes.email}`}>
                                <a href="/">myemailhere@gmail.com</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div ref={mobileMenuRef} className={`${classes.menu} ${classes['menu-mobile']} ${rubik.className}`}>
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

        </header >
    )
}