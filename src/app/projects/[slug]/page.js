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
                        <ProjectTextContent
                            url={project.url}
                            heading={project.text[0].heading}
                            paragraphOne={project.text[0].content[0]}
                            paragraphTwo={project.text[0].content[1]}
                            tools={project.tools}
                            github={project.github}
                        ></ProjectTextContent>

                        <ProjectTextContent
                            heading={project.text[1].heading}
                            paragraphOne={project.text[1].content[0]}
                            paragraphTwo={project.text[1].content[1]}
                            paragraphThree={project.text[1].content[2]}
                        ></ProjectTextContent>

                        <ProjectTextContent
                            heading={project.text[2].heading}
                            paragraphOne={project.text[2].content[0]}
                            paragraphTwo={project.text[2].content[1]}
                            paragraphThree={project.text[2].content[2]}
                        ></ProjectTextContent>

                        <ProjectTextContent
                            heading={project.text[3].heading}
                            paragraphOne={project.text[3].content[0]}
                            paragraphTwo={project.text[3].content[1]}
                            paragraphThree={project.text[3].content[2]}
                        ></ProjectTextContent>

                        <ProjectTextContent
                            heading={project.text[4].heading}
                            paragraphOne={project.text[4].content[0]}
                            paragraphTwo={project.text[4].content[1]}
                            paragraphThree={project.text[4].content[2]}
                        ></ProjectTextContent>

                        <ProjectTextContent
                            heading={project.text[5].heading}
                            paragraphOne={project.text[5].content[0]}
                            paragraphTwo={project.text[5].content[1]}
                            paragraphThree={project.text[5].content[2]}
                        ></ProjectTextContent>

                        <ProjectTextContent
                            heading={project.text[6].heading}
                            paragraphOne={project.text[6].content[0]}
                            paragraphTwo={project.text[6].content[1]}
                            paragraphThree={project.text[6].content[2]}
                        ></ProjectTextContent>
                        <ProjectImage
                            url={project.images[1].url}
                            description={project.images[1].img_description}
                        />
                        <ProjectTextContent
                            heading={project.text[7].heading}
                            paragraphOne={project.text[7].content[0]}
                            paragraphTwo={project.text[7].content[1]}
                            paragraphThree={project.text[7].content[2]}
                        ></ProjectTextContent>

                        <ProjectTextContent
                            heading={project.text[8].heading}
                            paragraphOne={project.text[8].content[0]}
                            paragraphTwo={project.text[8].content[1]}
                            paragraphThree={project.text[8].content[2]}
                        ></ProjectTextContent>

                        <ProjectImage
                            url={project.images[0].url}
                            description={project.images[0].img_description}
                        />

                        <ProjectImage url={project.images[2].url} description={project.images[2].img_description} />
                        <ProjectImage url={project.images[3].url} description={project.images[3].img_description} />
                        <ProjectImage url={project.images[4].url} description={project.images[4].img_description} />

                        {/* <ProjectImage /> */}
                        {/* <ProjectTextContent />
                        <ProjectTextContent />
                        <ProjectTextContent />
                        <ProjectTextContent /> */}
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