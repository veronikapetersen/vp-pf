import classes from './ProjectImage.module.scss';

import { rubik } from '@/utils/fonts';

export default function ProjectImage(props) {
    return (
        <div className={classes.wrapper}>
            <div className={classes['project-image']}>
                <div className={classes['project-image__container']}>
                    <img src={`/images/projects/${props.url}`} alt="Project" />
                </div>
                <div className={`${classes['project-image__description']} ${rubik.className}`}>
                    {props.description}
                </div>
            </div>
        </div>
    )
}