'use client';

import Nav from "@/components/Nav/Nav";
import { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import Menu from "@/components/Menu/Menu";

export default function Home() {

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
      <Nav
        timeline={timeline}
        slideUp={true}
        delay={1.8}
      ></Nav>
      <Menu></Menu>
    </>
  )
}
