import classes from './SwiperMenu.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import { useRef } from 'react';

export default () => {

    const swiperRef = useRef(null);

    const swiperEl = swiperRef.current;

    // console.log("swiper El", swiperEl)
    return (
        <Swiper
            ref={swiperRef}
            className={classes.swiper}
            modules={[Scrollbar, Mousewheel]}
            pagination={{ clickable: true }}
            direction='vertical'
            scrollbar={{ draggable: true }}
            mousewheel
            slidesPerView={1}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide className={classes.slide}>Slide 1</SwiperSlide>
            <SwiperSlide className={classes.slide}>Slide 2</SwiperSlide>
            <SwiperSlide className={classes.slide}>Slide 3</SwiperSlide>
            <SwiperSlide className={classes.slide}>Slide 4</SwiperSlide>
        </Swiper>
    );
};
