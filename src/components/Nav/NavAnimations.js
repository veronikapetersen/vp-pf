import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const setInitialStatesforMoveLogo = (headerRef) => {
    gsap.set(headerRef, { scale: 1 });
};

export const moveLogoUp = (headerRef) => {
    const tl = gsap.timeline();

    tl.to(headerRef, {
        duration: 0.8,
        delay: 0.2,
        top: 0,
        bottom: "auto",
        transformOrigin: "center center",
        ease: "power4.inOut"
    });

    return tl;
};

export const setInitialStatesForSlideUp = (logoRef, column1Ref, column2Ref) => {
    gsap.set([logoRef, column1Ref, column2Ref], {
        transform: `translateY(120%)`
    });
};

export const slideLogoUp = (logoRef, column1Ref, column2Ref) => {
    const tl = gsap.timeline();

    tl.to([logoRef, column1Ref, column2Ref], {
        duration: 1,
        delay: 1.8,
        transform: `translateY(0)`,
        ease: "power2.inOut",
        stagger: 0.2
    })
    return tl;
};

export const setInitialStatesForFadeOutNavLinks = (navLinks) => {
    gsap.set(navLinks, { opacity: 1 });
}

export const fadeOutNavLinks = (navLinks, main) => {

    const tl = gsap.timeline({
        scrollTrigger: {
            id: "project1",
            trigger: main,
            start: "top 10%",
            end: "250px 15%",
            // markers: true,
            scrub: true,
            toggleActions: "play none none reverse",
        }
    });

    tl.to(navLinks, { opacity: 0 });

    return tl;
}

export const moveLogoDownOnScroll = (headerRef, headerRefHeight, bottomHeadingRef) => {

    const tl = gsap.timeline({
        scrollTrigger: {
            id: "project2",
            trigger: bottomHeadingRef,
            start: "top 70%",
            end: "50% 90%", // when the 50% of the bottomHeadingRef is at 90% of the viewport
            // markers: true,
            scrub: true,
            toggleActions: "play none none reverse",
        }
    });

    tl.to(headerRef, {
        top: `calc(100vh - ${headerRefHeight}px)`,
        transformOrigin: "center center",
    });

    return tl;
};

export const fadeInNavLinks = (navLinks, bottomHeadingRef) => {

    const tl = gsap.timeline({
        scrollTrigger: {
            id: "project3",
            trigger: bottomHeadingRef,
            start: "top 65%",
            end: "80% 95%",
            markers: false,
            scrub: true,
            toggleActions: "play none none reverse",
        }
    });

    tl.to(navLinks, {
        opacity: 1,
    })

    return tl;
}