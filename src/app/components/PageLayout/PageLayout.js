import classes from "./PageLayout.module.scss";
import Nav from "@/app/components/Nav/Nav";

export default function PageLayout({ children }) {
    return (
        <>
            {/* <Nav top={true}></Nav> */}
            <main className={classes.main}>
                {children}
            </main>
        </>
    )
}