'use client';
import classes from './BackButton.module.scss';

// import { useRouter } from 'next/navigation';

export default function BackButton({ children }) {

    // const router = useRouter();

    return (
        // <button className={classes['back-button']} onClick={() => router.back()}>
        <button className={classes['back-button']}>
            <img src="assets/arrow_back.svg" alt="Back" />
        </button>
    );
}