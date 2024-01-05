'use client';

import Nav from "@/app/components/Nav/Nav";
import { useLayoutEffect, useState } from "react";
// import { useRouter } from "next/router";
import { gsap } from "gsap";


export default function Home() {

  // const router = useRouter();

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
      <Nav timeline={timeline} top={true}></Nav>
      <h1>Home Page</h1>
    </>
  )
}
