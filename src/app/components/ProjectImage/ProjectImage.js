import classes from './ProjectImage.module.scss';

export default function ProjectImage() {
    return (
        <section className={classes['project-image']}>
            <div className={classes['project-image__container']}>
                <img src="images/workdesk.jpg" alt="Project" />
            </div>
            <div className={classes['project-image__description']}>
                Id occaecat qui anim officia ex in enim voluptate deserunt incididunt incididunt. Id occaecat qui anim officia ex in enim voluptate deserunt incididunt incididunt.
            </div>
        </section>
    )
}