import classes from './ProjectHero.module.scss';
import { ProjectHeading1 } from "@/components/ProjectHeadings/ProjectHeadings";


export default function ProjectHero({ title }) {

    return (
        <div className={classes['project-hero']}>
            <div className={classes['project-hero__content']}>
                <div className={classes['project-hero__title']}>
                    <ProjectHeading1>{title}</ProjectHeading1>
                </div>
            </div>
        </div>
    );
}