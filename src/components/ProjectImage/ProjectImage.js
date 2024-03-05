import classes from './ProjectImage.module.scss';
import { useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from '@gsap/react';


import { rubik } from '@/utils/fonts';

export default function ProjectImage(props) {

    const imgRef = useRef(null);
    const infoRef = useRef(null);

    const wrapperRef = useRef(null);

    if (props.summary) {
        useGSAP(() => {
            gsap.to(imgRef.current, {
                opacity: 1,
                duration: 1,
                ease: "power3.inOut",
            });

            gsap.to(infoRef.current, {
                opacity: 1,
                rotateY: 0,
                duration: 1,
                delay: 0.5,
                ease: "power3.inOut",
            })
        }, { scope: wrapperRef })
    }

    if (!props.summary) {
        useGSAP(() => {
            gsap.to(imgRef.current, {
                opacity: 1,
                scrollTrigger: {
                    trigger: imgRef.current,
                    start: "top 80%",
                    end: "top 70%",
                    scrub: 1,
                    // markers: true,
                    toggleActions: "none play reverse none",
                }
            });

            gsap.to(infoRef.current, {
                opacity: 1,
                rotateY: 0,
                scrollTrigger: {
                    trigger: infoRef.current,
                    start: "top 75%",
                    end: "top 60%",
                    scrub: 1,
                    // markers: true,
                    toggleActions: "none play reverse none",
                }
            })
        }, { scope: wrapperRef })
    }

    return (
        <div ref={wrapperRef} className={classes.wrapper}>
            <div className={classes['project-image']}>
                <div ref={imgRef} className={classes['project-image__container']}>
                    <img src={`/images/projects/${props.url}`} alt="Project" />
                </div>
                <div className={`${classes['project-image__description']} ${rubik.className}`}>
                    <p ref={infoRef} >
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    )
}