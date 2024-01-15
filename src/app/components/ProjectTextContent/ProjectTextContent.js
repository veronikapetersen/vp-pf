import classes from './ProjectTextContent.module.scss';

import ParagraphHeading from '@/app/components/ParagraphHeading/ParagraphHeading';
export default function ProjectContent() {


    return (
        <>
            <section className={classes['project-description']}>
                <div>
                    <ParagraphHeading>Lorem Ipsum Dolor Sit Amet</ParagraphHeading>
                    <div>Pariatur proident et laborum non fugiat ex dolore sunt ad cupidatat Lorem proident. Aliqua reprehenderit veniam cillum ipsum eiusmod reprehenderit in esse voluptate. Consequat incididunt ut enim enim ex ex sunt adipisicing Lorem. Et aliqua culpa in proident consectetur et sunt.</div>
                </div>
                <div>Pariatur proident et laborum non fugiat ex dolore sunt ad cupidatat Lorem proident. Aliqua reprehenderit veniam cillum ipsum eiusmod reprehenderit in esse voluptate. Consequat incididunt ut enim enim ex ex sunt adipisicing Lorem. Et aliqua culpa in proident consectetur et sunt.</div>
                <div>
                    <div>www.website.com</div>
                    <br></br>
                    <div>Tools:
                        <ul>
                            <li>Lorem</li>
                            <li>Ipsum</li>
                            <li>Dolor</li>
                            <li>Sit amet</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}