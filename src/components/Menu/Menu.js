import classes from './Menu.module.scss';
import Link from 'next/link';

import ProjectsData from "@/projects-data/ProjectsData";

export default function Menu() {

    return (
        <div className={classes['stage-perspective']}>
            <div className={classes.stage}>
                <ul className={classes.list}>
                    {ProjectsData.map((project) => (

                        <li key={project.id} className={classes.menulink}>
                            <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                        </li>
                    ))}
                    
                </ul>
            </div>
        </div>
    );
}
