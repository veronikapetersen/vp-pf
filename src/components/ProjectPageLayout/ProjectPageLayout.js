'use client';
import classes from "./ProjectPageLayout.module.scss";
import Nav from "@/components/Nav/Nav";

import { useRef, useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function ProjectPageLayout({ children }) {

    const navRef = useRef(null);
    const mainRef = useRef(null);

    useEffect(() => {
        const nav = navRef.current;
        const main = mainRef.current;

        if (!nav || !main) {
            console.error("Refs are not assigned correctly.");
            return;
        }

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: main,
                start: "top 10%",
                end: "400px 20%",
                scrub: true,
                // markers: true,
                toggleActions: "play none none reverse",
            }
        });

        tl.to(nav, { opacity: 0 });

        return () => {
            if (tl.scrollTrigger) {
                tl.scrollTrigger.kill();
            }
        };
    }, []);

    return (
        <>
            {/* <Nav ref={navRef} top={true}></Nav> */}

            <Nav ref={navRef}></Nav>

            <main className={classes.main} ref={mainRef}>
                {children}
            </main>
        </>
    )
}