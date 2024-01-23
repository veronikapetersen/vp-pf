import classes from './ParagraphHeading.module.scss';
export default function ParagraphHeading({ children }) {
    return (
        <h3 className={classes['paragraph-heading']}>{children}</h3>
    )
}