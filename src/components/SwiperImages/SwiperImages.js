import classes from './SwiperImages.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef, useEffect } from 'react';
import { rubik } from '@/utils/fonts';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function SwiperImages(props) {

    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    const paginationRef = useRef(null);

    const swiperRef = useRef(null);
    const swiperInfo = useRef(null);

    useEffect(() => {
        gsap
            .to(swiperRef.current, {
                opacity: 1,
                scrollTrigger: {
                    trigger: swiperRef.current,
                    start: "top 80%",
                    end: "top 70%",
                    scrub: 1,
                    // markers: true,
                    toggleActions: "none play reverse none",
                }
            });
        gsap.to(swiperInfo.current, {
            opacity: 1,
            rotateY: 0,
            scrollTrigger: {
                trigger: swiperInfo.current,
                start: "top 75%",
                end: "top 60%",
                scrub: 1,
                // markers: true,
                toggleActions: "none play reverse none",
            }
        })
    }, [])

    return (
        <div className={classes.wrapper}>
            <div className={`${classes['swiper-images-container']} ${rubik.className}`}>
                <div ref={swiperRef} className={classes['swiper-images']}>
                    <Swiper
                        modules={[Pagination, Navigation]}
                        loop={true}
                        pagination={{
                            el: paginationRef.current,
                            clickable: false,
                            type: 'fraction'
                        }}
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                        }}
                    >

                        {props.images && props.images.map((image, index) => {
                            return (
                                <SwiperSlide key={index} className={classes.slide}>
                                    <img src={`/images/projects/${image.url}`} alt="Project" />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>

                <div className={classes.info}>
                    <div ref={swiperInfo} className={classes['info-wrapper']}>
                        <div className={classes['nav-buttons-container']}>
                            <div ref={navigationPrevRef} className={classes['nav-btn']} ><svg xmlns="http://www.w3.org/2000/svg" width="19" height="8" viewBox="0 0 19 8"><path d="M1.94974747,3 L19,3 L19,4 L1.70710678,4 L4.24264069,6.53553391 L3.53553391,7.24264069 L-2.22044605e-16,3.62132034 L3.53553391,0 L4.24264069,0.707106781 L1.94974747,3 Z"></path></svg></div>
                            <div ref={paginationRef} className="custom-pagination"></div>
                            <div ref={navigationNextRef} className={classes['nav-btn']} ><svg xmlns="http://www.w3.org/2000/svg" width="19" height="8" viewBox="0 0 19 8"><path d="M1.94974747,3 L19,3 L19,4 L1.70710678,4 L4.24264069,6.53553391 L3.53553391,7.24264069 L-2.22044605e-16,3.62132034 L3.53553391,0 L4.24264069,0.707106781 L1.94974747,3 Z" transform="matrix(-1 0 0 1 19 0)"></path></svg></div>
                        </div>
                        <p className={classes.description}>{props.images[0].img_description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
