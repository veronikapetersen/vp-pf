// 'use client';
// import classes from './BackButton.module.scss';
// import Link from 'next/link';

// import gsap from "gsap";
// import { useRef } from "react";
// import { useGSAP } from '@gsap/react';


// export default function BackButton() {
//     const buttonRef = useRef(null);
//     const wrapperRef = useRef(null);

//     useGSAP(() => {
//         gsap
//             .to(buttonRef.current, {
//                 duration: 1,
//                 delay: 2,
//                 right: "16px",
//                 ease: "power4.inOut"
//             });
//     }, { scope: wrapperRef });

//     return (
//         <div ref={wrapperRef} className={classes.wrapper}>

//             <Link className={classes.link} href="/">
//                 <button ref={buttonRef} className={classes['back-button']}>
//                     <img src="/assets/arrow_back.svg" alt="Back" />
//                 </button>
//             </Link>
//         </div>
//     );
// }