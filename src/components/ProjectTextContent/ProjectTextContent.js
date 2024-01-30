import classes from './ProjectTextContent.module.scss';
import Link from 'next/link';

import ParagraphHeading from '@/components/ParagraphHeading/ParagraphHeading';


export default function ProjectTextContent(props) {

    return (
        <>
            <section className={classes['project-description']}>
                <div className={classes.row}>
                    {props.heading && (<ParagraphHeading>{props.heading}</ParagraphHeading>)}
                </div>

                <div className={classes['row--with-columns']}>
                    <div>
                        <p>{props.paragraphOne}</p>
                    </div>

                    <div>
                        <p>{props.paragraphTwo}</p>
                    </div>

                    <div>
                        {props.url && (<div className={classes['link-wrapper']}><Link href={`https://${props.url}`} target="_blank">{props.url}</Link></div>)}

                        {props.github && (<div className={classes['link-wrapper']}><Link href={`https://${props.github}`} target="_blank">{props.github}</Link></div>)}

                        {props.tools && (
                            <div>Built with:
                                <ul>
                                    {props.tools.map((tool) => (<li key={tool}>{tool}</li>))}
                                </ul>
                            </div>
                        )}
                        {props.paragraphThree && (<p>{props.paragraphThree}</p>)}
                    </div>
                </div>
            </section>
        </>
    )
}