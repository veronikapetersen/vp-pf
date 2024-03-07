import { rubik } from '@/utils/fonts';
import classes from './ProjectTextContent.module.scss';
import Link from 'next/link';
import { useRef } from "react";

import ParagraphHeading from '@/components/ParagraphHeading/ParagraphHeading';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from '@gsap/react';


export default function ProjectTextContent(props) {

    const titleRef = useRef(null);
    const sectionOneRef = useRef(null);
    const sectionTwoRef = useRef(null);
    const sectionThreeRef = useRef(null);

    const wrapperRef = useRef(null);

    useGSAP(() => {
        if (props.summary) {
            gsap.to(titleRef.current, {
                opacity: 1,
                translateY: 0,
                duration: 1,
                delay: 0.4,
                ease: "power3.inOut"
            });

            gsap.to(sectionOneRef.current, {
                opacity: 1,
                translateY: 0,
                ease: "power3.inOut",
                duration: 1,
                delay: 0.4
            });

            gsap.to(sectionTwoRef.current, {
                opacity: 1,
                translateY: 0,
                ease: "power3.inOut",
                duration: 1,
                delay: 0.6
            })

            gsap.to(sectionThreeRef.current, {
                opacity: 1,
                translateY: 0,
                ease: "power3.inOut",
                duration: 1,
                delay: 0.8
            })
        } else {
            gsap.to(titleRef.current, {
                opacity: 1,
                translateY: 0,
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                    end: "top 70%",
                    scrub: 1,
                    // markers: true,
                    toggleActions: "none play reverse none",
                }
            });

            gsap.to(sectionOneRef.current, {
                opacity: 1,
                translateY: 0,
                scrollTrigger: {
                    trigger: sectionOneRef.current,
                    start: "top 80%",
                    end: "top 70%",
                    scrub: 1,
                    // markers: true,
                    toggleActions: "none play reverse none",
                }
            });

            gsap.to(sectionTwoRef.current, {
                opacity: 1,
                translateY: 0,
                scrollTrigger: {
                    trigger: sectionTwoRef.current,
                    start: "top 75%",
                    end: "top 60%",
                    scrub: 1,
                    // markers: true,
                    toggleActions: "none play reverse none",
                }
            })

            gsap.to(sectionThreeRef.current, {
                opacity: 1,
                translateY: 0,
                scrollTrigger: {
                    trigger: sectionThreeRef.current,
                    start: "top 70%",
                    end: "top 60%",
                    scrub: 1,
                    // markers: true,
                    toggleActions: "none play reverse none",
                }
            })
        }
    }), { scope: wrapperRef }

    return (
        <>
            {props.paragraphOne && (
                <div ref={wrapperRef} className={classes.wrapper}>
                    {/* <div className={classes['']}> */}
                    <div className={`${classes['project-description']} ${rubik.className}`}>
                        {props.heading &&
                            <div ref={titleRef} className={classes.row}>
                                <ParagraphHeading>{props.heading}</ParagraphHeading>
                            </div>
                        }


                        <div className={`${classes['row--with-columns']} ${rubik.className}`}>
                            <div className={classes.texts}>
                                <div ref={sectionOneRef} className={classes.text}>
                                    {props.paragraphOne && props.paragraphOne !== "" && (
                                        <p>{props.paragraphOne}</p>
                                    )}
                                </div>

                                <div ref={sectionTwoRef} className={classes.text}>
                                    {props.paragraphTwo && (
                                        <p>{props.paragraphTwo}</p>
                                    )}
                                </div>
                            </div>

                            <div ref={sectionThreeRef} className={`${classes.text} ${classes.textExtra}`}>

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
                                    <div className={classes.tools}><span>Built with:</span>
                                        <ul>
                                            {props.tools.map((tool) => (<li key={tool}>{tool}</li>))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}