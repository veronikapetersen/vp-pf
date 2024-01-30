import classes from './ProjectImage.module.scss';

export default function ProjectImage(props) {
    return (
        <section className={classes['project-image']}>
            <div className={classes['project-image__container']}>
                {/* <img src="/images/workdesk.jpg" alt="Project" /> */}
                {/* <img src="/images/projects/kwr/opened_sheet.png" alt="Project" /> */}
                <img src={`/images/projects/${props.url}`} alt="Project" />
            </div>
            <div className={classes['project-image__description']}>
                {props.description}
            </div>
        </section>
    )
}