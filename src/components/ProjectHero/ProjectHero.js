import classes from './ProjectHero.module.scss';
import { ProjectHeading1 } from "@/components/ProjectHeadings/ProjectHeadings";
import BackButton from '@/components/Buttons/BackButton/BackButton';


export default function ProjectHero({ title }) {

    return (
        <div className={classes['project-hero']}>
            <div className={classes['project-hero__content']}>
                <div className={classes.btn}>
                    <BackButton />
                </div>
                <div className={classes['project-hero__title']}>
                    <ProjectHeading1>{title}</ProjectHeading1>
                </div>
            </div>
        </div>
    );
}