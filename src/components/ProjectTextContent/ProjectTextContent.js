import classes from './ProjectTextContent.module.scss';
import Link from 'next/link';

import ParagraphHeading from '@/components/ParagraphHeading/ParagraphHeading';


export default function ProjectTextContent(props) {

    return (
        <>
            <div className={classes['project-description']}>
                <div className={classes.row}>
                    {props.heading && (<ParagraphHeading>{props.heading}</ParagraphHeading>)}
                </div>

                <div className={classes['row--with-columns']}>
                    <div>
                        {props.paragraphOne && (
                            <p>{props.paragraphOne}</p>
                        )}
                    </div>

                    <div>
                        {props.paragraphTwo && (
                            <p>{props.paragraphTwo}</p>
                        )}
                    </div>

                    <div>
                        {props.url && (<div className={classes['link-wrapper']}>
                            <Link href={`https://${props.url}`} target="_blank">
                                www.{props.url}
                            </Link>
                        </div>)}

                        {props.github && (<div className={classes['link-wrapper']}>
                            <Link href={`https://${props.github}`} target="_blank">
                                View the code
                                <span className={classes.icon}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg></span>
                            </Link>
                        </div>)}

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
            </div>
        </>
    )
}