import gsap from "gsap";

export const setInitialStates = (headingRef) => {
    gsap.set(headingRef, { scale: 1 })
}

export const fromLeftToRight = (headingRef) => {

    const tl = gsap.timeline();

    tl.to(headingRef, {
        duration: 1,
        translateX: "150%",
        transformOrigin: "center center",
        ease: "power1.out"
    });

    return tl;
}