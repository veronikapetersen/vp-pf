import gsap from 'gsap';

import classes from './FoldMenu.module.scss';

import { useEffect, useRef, useState } from 'react';

export default function FoldMenu() {


    const stairsRef = useRef(null);
    const menuRef = useRef(null);

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const openMenuHandler = () => {
        setMenuIsOpen(true);
        const stairs = Array.from(stairsRef.current.children);
        gsap.set(stairs, { y: '-100vh', height: '100vh' });
        gsap.to(stairs, {
            y: '0',
            height: '100vh',
            stagger: -0.1,
            duration: 0.8,
            ease: "power3.inOut",
        });

        const menuItems = Array.from(menuRef.current.children);
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
            onComplete: () => { console.log("out", menuIsOpen) }
        })
        setMenuIsOpen(false);

        const menuItems = Array.from(menuRef.current.children);
        gsap.to(menuItems, {
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.inOut",
        })
    }

    return (
        <>
            <div>
                <div className={classes.burgerIconWrapper}>
                    <div className={classes.burgerIcon}>
                        {menuIsOpen ?
                            <div onClick={closeMenuHandler} className={classes.close}>
                                <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.5 1.5L67 67" stroke="black" /> <path d="M66.5 1L0.999997 66.5" stroke="black" /> </svg>
                            </div> :
                            <div onClick={openMenuHandler} className={classes.open}>
                                <div className={classes.line}></div>
                                <div className={classes.line}></div>
                                <div className={classes.line}></div>
                            </div>
                        }
                    </div>
                </div>

                <div ref={menuRef} className={classes.menu}>
                    <div className={classes.menuItem}>Projects</div>
                    <div className={classes.menuItem}>Agency</div>
                    <div className={classes.menuItem}>Contact</div>
                </div>

                <div ref={stairsRef} className={classes.stairs}>
                    <div className={classes.stair}></div>
                    <div className={classes.stair}></div>
                    <div className={classes.stair}></div>
                    <div className={classes.stair}></div>
                    <div className={classes.stair}></div>
                </div>

            </div>
        </>
    )

}