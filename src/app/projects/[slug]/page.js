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

import SwiperImages from "@/components/SwiperImages/SwiperImages";

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
            {/* <Nav
                timeline={timeline}
                bottom={true}
                fadeNavLinks={true}
                main={mainRef.current}
                bottomHeading={bottomHeadingRef.current}
            ></Nav> */}


            <SwiperImages>

            </SwiperImages>


        </>
    )
}
// {ProjectsData.filter((project) => project.slug === params.slug).map((project) => (
//     <main key={project.id} ref={mainRef}>
//         <ProjectPageLayout >
//             {/* <ProjectHero title={project.title}></ProjectHero> */}

//             {project.sections.map((section) => (
//                 <>
//                     <section key={section.id}>
//                         <ProjectTextContent
//                             heading={section.heading}
//                             paragraphOne={section.content[0]}
//                             paragraphTwo={section.content[1]}
//                             paragraphThree={section.content[2]}
//                         ></ProjectTextContent>


//                         {section.images && section.images.length > 1 ? (
//                             section.images.map((image) => (
//                                 <ProjectImage key={image.id} url={image.url} description={image.img_description} />
//                             ))
//                         ) : (
//                             section.images && section.images.length === 1 && (
//                                 <img src={section.images[0].url} alt={section.images[0].img_description} />
//                             )
//                         )}

//                     </section>
//                 </>
//             ))}

//             {/* TODO: implement a swiper carousel here with dynamic text for each img */}
//             {project.images &&
//                 <ProjectImage url={project.images[2].url} description={project.images[2].img_description} />
//                 /* <ProjectImage url={project.images[3].url} description={project.images[3].img_description} /> */
//             }

//             {project.feedback &&
//                 <Quote quotes={project.feedback.quotes} author={project.feedback.name} position={project.feedback.position}></Quote>
//             }
//             <div ref={bottomHeadingRef}>
//                 <ProjectHeading2 slug={nextProject.slug} heading={nextProject.title}></ProjectHeading2>
//             </div>
//         </ProjectPageLayout>
//     </main >
// ))
// }