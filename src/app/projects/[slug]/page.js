'use client';
import Nav from "@/components/Nav/Nav";
import { ProjectHeading2 } from "@/components/ProjectHeadings/ProjectHeadings";
import ProjectHero from "@/components/ProjectHero/ProjectHero";
import ProjectTextContent from "@/components/ProjectTextContent/ProjectTextContent";
import ProjectImage from "@/components/ProjectImage/ProjectImage";
import ProjectPageLayout from "@/components/ProjectPageLayout/ProjectPageLayout";
import Quote from "@/components/Quote/Quote";

import ProjectsData from "@/projects-data/ProjectsData";

import { useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import SwiperImages from "@/components/SwiperImages/SwiperImages";

export default function Project({ params }) {

    const currentProjectIndex = ProjectsData.findIndex((project) => project.slug === params.slug);
    const nextProjectIndex = (currentProjectIndex + 1) % ProjectsData.length;
    const nextProject = ProjectsData[nextProjectIndex];

    const mainRef = useRef(null);
    const bottomHeadingRef = useRef(null);

    const [timeline, setTimeline] = useState(null);
    const [bottomHeading, setBottomHeading] = useState(null);
    const [main, setMain] = useState(null);

    useGSAP(() => {

        const timeline = gsap.timeline(
            { id: "projectTimeline" }
        );
        setTimeline(timeline);
        setBottomHeading(bottomHeadingRef.current);
        setMain(mainRef.current);
    }, []);
    return (
        <>
            <Nav
                timeline={timeline}
                main={main}
                bottomHeading={bottomHeading}
                bottom={true}
            ></Nav>

            {ProjectsData.filter((project) => project.slug === params.slug).map((project) => (
                <main key={project.id} ref={mainRef}>
                    <ProjectPageLayout key={project.id} >
                        <ProjectHero title={project.title} ></ProjectHero>

                        <section>
                            <ProjectTextContent
                                summary={true}
                                heading={project.summary.heading}
                                paragraphOne={project.summary.content[0]}
                                paragraphTwo={project.summary.content[1]}
                                url={project.url}
                                github={project.github}
                                tools={project.tools}
                            ></ProjectTextContent>

                            <ProjectImage summary={true} url={project.summary.images[0].url} description={project.summary.images[0].img_description} />
                        </section>

                        {project.sections.map((section) => (
                            <section key={section.id}>
                                <ProjectTextContent
                                    heading={section.heading}
                                    paragraphOne={section.content[0]}
                                    paragraphTwo={section.content[1]}
                                ></ProjectTextContent>

                                {section.images && section.images.length > 1 ? (
                                    <SwiperImages images={section.images}></SwiperImages>
                                ) : (
                                    section.images && section.images.length === 1 && (
                                        <ProjectImage url={section.images[0].url} description={section.images[0].img_description} />
                                    )
                                )}

                            </section>
                        ))}
                        {project.feedback &&
                            <Quote quotes={project.feedback.quotes} author={project.feedback.name} position={project.feedback.position}></Quote>
                        }
                        <div ref={bottomHeadingRef}>
                            <ProjectHeading2 slug={nextProject.slug} heading={nextProject.title}></ProjectHeading2>
                        </div>
                    </ProjectPageLayout>
                </main >
            ))
            }
        </>
    )
}
