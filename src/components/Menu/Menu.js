import classes from './Menu.module.scss';
import Link from 'next/link';

import { archivo_black } from '@/utils/fonts';
import ProjectsData from "@/projects-data/ProjectsData";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

export default function Menu() {

    const listRef = useRef(null);
    const wrapperRef = useRef(null);

    useGSAP(() => {

        const list = listRef.current.children;
        const menulinksArray = Array.from(list);

        gsap.set(menulinksArray, { opacity: 0, y: '150vh', rotateY: '-90deg' });
        gsap.to(menulinksArray, {
            y: 0, opacity: 1, rotateY: '-45deg',
            stagger: 0.1, duration: 2, ease: "power3.inOut"
        });

    }, { scope: wrapperRef });

    return (
        <div ref={wrapperRef} className={classes['stage-perspective']}>
            <div className={classes.stage}>
                <ul ref={listRef} className={classes.list}>
                    {ProjectsData.map((project) => (
                        <li key={project.id} className={`${classes.menulinkWrapper} ${archivo_black.className}`}>
                            <Link data-text={project.year + ' /'} href={`/projects/${project.slug}`}>{project.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
