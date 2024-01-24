'use client';
import classes from "./ProjectPageLayout.module.scss";

export default function ProjectPageLayout({ children }) {

    return (
        <>
            <div className={classes.main}>
                {children}
            </div>
        </>
    )
}