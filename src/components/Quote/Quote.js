import classes from './Quote.module.scss';

import gsap from 'gsap';
import { useRef, useEffect } from 'react';

export default function Quote(props) {
    const quoteRef = useRef(null);

    useEffect(() => {
        gsap
            .to(quoteRef.current, {
                opacity: 1,
                rotateY: 0,
                scrollTrigger: {
                    trigger: quoteRef.current,
                    start: "top 50%",
                    end: "top 60%",
                    scrub: 1,
                    // markers: true,
                    toggleActions: "none play reverse none",
                }
            });

    }, [])

    return (
        <>
            <section className={classes.wrapper}>
                <div ref={quoteRef} className={classes['quotes__container']}>
                    <div className={classes.quotes}>
                        {props.quotes && (
                            props.quotes.map((quote, index) => (<p key={index} className={classes['single_quote']}>{quote.quote}</p>))
                        )}
                    </div>
                    <div className={classes.author}>
                        <p>- {props.author}, {props.position}</p>
                    </div>
                </div>
            </section>
        </>
    )
}