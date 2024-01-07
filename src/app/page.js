'use client';

import Nav from "@/app/components/Nav/Nav";
import { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";

import Menu from "@/app/components/Menu/Menu";

import SlideInHeading from "@/app/components/SlideInHeading/SlideInHeading";
export default function Home() {


  // const [timeline, setTimeline] = useState(null);

  // useLayoutEffect(() => {
  //   const context = gsap.context(() => {
  //     const tl = gsap.timeline({
  //       paused: true
  //     })

  //     setTimeline(tl);
  //   })

  //   return () => { context.revert() }
  // }, [])


  return (
    <>
      <SlideInHeading></SlideInHeading>
      {/* <Menu></Menu> */}
      {/* <Nav timeline={timeline} top={true}></Nav> */}
      {/* <h1>Home Page</h1> */}
    </>
  )
}
