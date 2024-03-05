'use client';

import { useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Menu from "@/components/Menu/Menu";
import Nav from "@/components/Nav/Nav";

export default function Home() {

  const [timeline, setTimeline] = useState(null);

  useGSAP(() => {

    const timeline = gsap.timeline(
      { id: "homePageTimeline" }
    );
    setTimeline(timeline);
  }, [])


  return (
    <>
      <Nav timeline={timeline} slideUp={true} ></Nav>
      <Menu></Menu>
    </>
  )
}
