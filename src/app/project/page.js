import { ProjectHeading1, ProjectHeading2 } from "@/app/components/ProjectHeadings/ProjectHeadings";
import ParagraphText from "@/app/components/ParagraphText/ParagraphText";
import ParagraphHeading from "@/app/components/ParagraphHeading/ParagraphHeading";
import ProjectHero from "@/app/components/ProjectHero/ProjectHero";
import ProjectTextContent from "@/app/components/ProjectTextContent/ProjectTextContent";
import ProjectImage from "@/app/components/ProjectImage/ProjectImage";
import ProjectPageLayout from "@/app/components/ProjectPageLayout/ProjectPageLayout";


export default function Project() {
    return (
        <>
            <ProjectPageLayout>

                <ProjectHero />
                <ProjectTextContent />
                <ProjectImage />
                <ProjectTextContent />
                <ProjectImage />
                <ProjectTextContent />
                <ProjectTextContent />
                <ProjectTextContent />

                {/* <ParagraphHeading>
                Project
            </ParagraphHeading> */}

                {/* <ParagraphText>
                Sit ad sint nisi ea. Deserunt anim dolore irure minim ea Lorem amet aliqua enim aliquip fugiat proident.
                In reprehenderit laboris ut officia. Et ut esse pariatur ullamco cupidatat mollit et aliquip.
                Amet sunt quis laboris tempor pariatur voluptate. Excepteur nostrud consequat nostrud commodo ad incididunt incididunt eiusmod eiusmod nostrud dolore labore.
                Ea do id elit qui non culpa amet dolor.
            </ParagraphText> */}

                <ProjectHeading2>Next Project Name</ProjectHeading2>
            </ProjectPageLayout>
        </>
    )
}