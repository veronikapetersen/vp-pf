import Nav from "@/app/components/Nav/Nav";

export default function PageLayout({ children }) {
    return (
        <>
            <Nav top={true}></Nav>
            <main>
                {children}
            </main>
        </>
    )
}