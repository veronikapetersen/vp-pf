import gsap from "gsap";

export const setInitialStates = (logoRef) => {
    gsap.set(logoRef, { scale: 1 })
}

export const moveLogoDown = (logoRef, logoRefHeight) => {

    const tl = gsap.timeline();

    tl.to(logoRef, {
        duration: 1,
        delay: 1,
        top: `calc(100% - ${logoRefHeight}px)`,
        transformOrigin: "center center",
        ease: "power1.out"

    });

    return tl;
}

export const moveLogoUp = (logoRef) => {
    const tl = gsap.timeline()

    tl.to(logoRef, {
        duration: 1,
        delay: 1,
        top: 0,
        bottom: "auto",
        transformOrigin: "center center",
        ease: "power4.out"

    });
    return tl;
}