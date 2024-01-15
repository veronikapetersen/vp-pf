'use client';

import BackButton from "@/app/components/Buttons/BackButton/BackButton";
import Nav from "@/app/components/Nav/Nav";
import { useLayoutEffect, useState } from "react";
import SwiperMenu from "@/app/components/SwiperMenu/SwiperMenu";

import { gsap } from "gsap";

export default function About() {
    // const [timeline, setTimeline] = useState(null);

    // useLayoutEffect(() => {
    //     const context = gsap.context(() => {
    //         const tl = gsap.timeline({
    //             paused: true
    //         })

    //         setTimeline(tl);
    //     })

    //     return () => { context.revert() }
    // }, [])

    return (
        <>
            {/* <BackButton>Back</BackButton>
            <Nav timeline={timeline} top={false}></Nav>
            <h1>About Page</h1> */}



            <SwiperMenu></SwiperMenu>
        </>
    )
}
