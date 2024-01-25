import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const setInitialStatesforMoveLogo = (headerRef) => {
    gsap.set(headerRef, { scale: 1 });
};

export const moveLogoDown = (headerRef, headerRefHeight) => {
    const tl = gsap.timeline();

    tl.to(headerRef, {
        duration: 1,
        delay: 1,
        top: `calc(100vh - ${headerRefHeight}px)`,
        transformOrigin: "center center",
        ease: "power4.out"
    });

    return tl;
};

export const moveLogoUp = (headerRef) => {
    const tl = gsap.timeline();

    tl.to(headerRef, {
        duration: 1,
        delay: 1,
        top: 0,
        bottom: "auto",
        transformOrigin: "center center",
        ease: "power4.out"
    });

    return tl;
};

export const setInitialStatesForSlideUp = (logoRef, column1Ref, column2Ref, column3Ref) => {
    gsap.set([logoRef, column1Ref, column2Ref, column3Ref], {
        transform: `translateY(120%)`
    });
};

export const slideLogoUp = (logoRef, column1Ref, column2Ref, column3Ref, delay = 0.2) => {
    const tl = gsap.timeline();

    tl
        // .to(logoRef, {
        //     duration: 1,
        //     // delay: 0.2,
        //     delay,
        //     transform: `translateY(0)`,
        //     ease: "power2.inOut"
        // })
        .to([logoRef, column1Ref, column2Ref, column3Ref], {
            duration: 1,
            delay,
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
            trigger: main,
            start: "top 10%",
            end: "250px 15%",
            markers: false,
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
            trigger: bottomHeadingRef,
            start: "top 70%",
            end: "50% 90%", // when the 50% of the bottomHeadingRef is at 90% of the viewport
            markers: false,
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