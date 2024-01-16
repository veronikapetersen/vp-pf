import classes from './SwiperMenu.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Scrollbar } from 'swiper/modules';
// import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/scss/scrollbar';
// import 'swiper/css/pagination';
import { useRef, useEffect } from 'react';

export default () => {

    const swiperRef = useRef(null);

    const handleSlideChange = () => {
        const activeSlideIndex = swiperRef.current.swiper.realIndex;
        console.log('activeSlideIndex', activeSlideIndex)

        const scrollbarDrag = document.querySelector('.swiper-scrollbar-drag');
        console.log('scrollbarDrag', scrollbarDrag);

        // if (scrollbarDrag) {
        //     // Replace 'Content A', 'Content B', 'Content C', etc. with your desired content
        //     const contentArray = ['1', '2', '3', '4'];
        //     scrollbarDrag.style.content = `'${contentArray[activeSlideIndex]}'`;
        // }

        if (scrollbarDrag) {
            // Remove any existing classes
            scrollbarDrag.classList.remove('zero', 'one', 'two', 'three');

            // Determine the class to add based on the activeSlideIndex
            if (activeSlideIndex === 0) {
                scrollbarDrag.classList.add('zero');
            } else if (activeSlideIndex === 1) {
                scrollbarDrag.classList.add('one');
            } else if (activeSlideIndex === 2) {
                scrollbarDrag.classList.add('two');
            } else if (activeSlideIndex === 3) {
                scrollbarDrag.classList.add('three');
            }
        }
    }

    // Use useEffect to handle the initial load
    useEffect(() => {
        handleSlideChange(); // Call the handler to set content for index 0
    }, []);
    return (
        <Swiper
            ref={swiperRef}
            className={classes.swiper}
            // modules={[Scrollbar, Mousewheel, Pagination]}
            modules={[Scrollbar, Mousewheel]}
            // pagination={{ clickable: true, type: 'fraction' }}
            direction='vertical'
            scrollbar={{ draggable: true }}
            mousewheel
            slidesPerView={1}
            // onSlideChange={() => console.log('slide change')}
            onSlideChange={handleSlideChange}
        // onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide className={classes.slide}>Slide 1</SwiperSlide>
            <SwiperSlide className={classes.slide}>Slide 2</SwiperSlide>
            <SwiperSlide className={classes.slide}>Slide 3</SwiperSlide>
            <SwiperSlide className={classes.slide}>Slide 4</SwiperSlide>
        </Swiper>
    );
};
