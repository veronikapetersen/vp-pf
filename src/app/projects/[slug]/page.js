import { ProjectHeading1, ProjectHeading2 } from "@/components/ProjectHeadings/ProjectHeadings";
import ParagraphText from "@/components/ParagraphText/ParagraphText";
import ParagraphHeading from "@/components/ParagraphHeading/ParagraphHeading";
import ProjectHero from "@/components/ProjectHero/ProjectHero";
import ProjectTextContent from "@/components/ProjectTextContent/ProjectTextContent";
import ProjectImage from "@/components/ProjectImage/ProjectImage";
import ProjectPageLayout from "@/components/ProjectPageLayout/ProjectPageLayout";

import ProjectsData from "@/projects-data/ProjectsData";

export default function Project({ params }) {
    const currentProjectIndex = ProjectsData.findIndex((project) => project.slug === params.slug);
    const nextProjectIndex = (currentProjectIndex + 1) % ProjectsData.length;
    const nextProject = ProjectsData[nextProjectIndex];

    return (
        <>
            {ProjectsData.filter((project) => project.slug === params.slug).map((project) => (
                <ProjectPageLayout>
                    <ProjectHero title={project.title}></ProjectHero>
                    <ProjectTextContent />
                    <ProjectImage />
                    <ProjectTextContent />
                    <ProjectImage />
                    <ProjectTextContent />
                    <ProjectTextContent />
                    <ProjectTextContent />

                    <ProjectHeading2 slug={nextProject.slug} heading={nextProject.title}></ProjectHeading2>
                </ProjectPageLayout>
            ))}
        </>
    )
}