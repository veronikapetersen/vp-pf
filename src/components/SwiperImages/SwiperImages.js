import classes from './SwiperImages.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef, useEffect } from 'react';

export default function SwiperImages() {

    // const swiperRef = useRef(null);

    // const handleSlideChange = () => {
    //     const activeSlideIndex = swiperRef.current.swiper.realIndex;
    //     console.log('activeSlideIndex', activeSlideIndex)

    //     const scrollbarDrag = document.querySelector('.swiper-scrollbar-drag');
    //     console.log('scrollbarDrag', scrollbarDrag);

    //     // if (scrollbarDrag) {
    //     //     // Replace 'Content A', 'Content B', 'Content C', etc. with your desired content
    //     //     const contentArray = ['1', '2', '3', '4'];
    //     //     scrollbarDrag.style.content = `'${contentArray[activeSlideIndex]}'`;
    //     // }

    //     if (scrollbarDrag) {
    //         // Remove any existing classes
    //         scrollbarDrag.classList.remove('zero', 'one', 'two', 'three');

    //         // Determine the class to add based on the activeSlideIndex
    //         if (activeSlideIndex === 0) {
    //             scrollbarDrag.classList.add('zero');
    //         } else if (activeSlideIndex === 1) {
    //             scrollbarDrag.classList.add('one');
    //         } else if (activeSlideIndex === 2) {
    //             scrollbarDrag.classList.add('two');
    //         } else if (activeSlideIndex === 3) {
    //             scrollbarDrag.classList.add('three');
    //         }
    //     }
    // }

    // Use useEffect to handle the initial load
    // useEffect(() => {
    //     handleSlideChange(); // Call the handler to set content for index 0
    // }, []);

    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    return (
        <>
            <div className={classes['swiper-images-container']}>
                <Swiper
                    // ref={swiperRef}
                    className={classes['swiper-wrapper']}
                    modules={[Pagination, Navigation]}
                    pagination={{ clickable: true, type: 'fraction' }}
                    // navigation
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                // onBeforeInit={(swiper) => {
                //     swiper.params.navigation.prevEl = navigationPrevRef.current;
                //     swiper.params.navigation.nextEl = navigationNextRef.current;
                // }}
                // onSlideChange={() => console.log('slide change')}
                // onSlideChange={handleSlideChange}
                >
                    <SwiperSlide className={classes.slide}>Slide 1</SwiperSlide>
                    <SwiperSlide className={classes.slide}>Slide 2</SwiperSlide>
                    <SwiperSlide className={classes.slide}>Slide 3</SwiperSlide>
                    <SwiperSlide className={classes.slide}>Slide 4</SwiperSlide>
                </Swiper>

                <div className={classes['nav-buttons']}>
                    <div ref={navigationPrevRef} className={classes['nav-btn']} >prev</div>
                    <div ref={navigationNextRef} className={classes['nav-btn']} >next</div>
                </div>
            </div>
        </>
    );
};
