'use client';

import Nav from "@/app/components/Nav/Nav";
import { useLayoutEffect, useState } from "react";

import { gsap } from "gsap";

export default function About() {
    const [timeline, setTimeline] = useState(null);

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const tl = gsap.timeline({
                paused: true
            })

            setTimeline(tl);
        })

        return () => { context.revert() }
    }, [])

    return (
        <>
            <Nav timeline={timeline} top={false}></Nav>
            <h1>About Page</h1>
        </>
    )
}
