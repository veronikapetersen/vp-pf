'use client';
import Nav from "@/components/Nav/Nav";
import { ProjectHeading2 } from "@/components/ProjectHeadings/ProjectHeadings";
import ParagraphText from "@/components/ParagraphText/ParagraphText";
import ProjectHero from "@/components/ProjectHero/ProjectHero";
import ProjectTextContent from "@/components/ProjectTextContent/ProjectTextContent";
import ProjectImage from "@/components/ProjectImage/ProjectImage";
import ProjectPageLayout from "@/components/ProjectPageLayout/ProjectPageLayout";

import ProjectsData from "@/projects-data/ProjectsData";

import { useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";

export default function Project({ params }) {

    const currentProjectIndex = ProjectsData.findIndex((project) => project.slug === params.slug);
    const nextProjectIndex = (currentProjectIndex + 1) % ProjectsData.length;
    const nextProject = ProjectsData[nextProjectIndex];

    const mainRef = useRef(null);
    const bottomHeadingRef = useRef(null);

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
                bottom={true}
                fadeNavLinks={true}
                main={mainRef.current}
                bottomHeading={bottomHeadingRef.current}
            ></Nav>

            {ProjectsData.filter((project) => project.slug === params.slug).map((project) => (
                <main key={project.id} ref={mainRef}>
                    <ProjectPageLayout >
                        <ProjectHero title={project.title}></ProjectHero>
                        <ProjectTextContent />
                        <ProjectImage />
                        <ProjectTextContent />
                        <ProjectImage />
                        <ProjectTextContent />
                        <ProjectTextContent />
                        <ProjectTextContent />
                        <div ref={bottomHeadingRef}>
                            <ProjectHeading2 slug={nextProject.slug} heading={nextProject.title}></ProjectHeading2>
                        </div>
                    </ProjectPageLayout>
                </main>
            ))
            }
        </>
    )
}