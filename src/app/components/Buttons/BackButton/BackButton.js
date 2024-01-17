'use client';
import classes from './BackButton.module.scss';
import Link from 'next/link';

// import { useRouter } from 'next/navigation';

export default function BackButton({ children }) {

    // const router = useRouter();

    return (
        <Link href="/">
            <button className={classes['back-button']}>
                <img src="assets/arrow_back.svg" alt="Back" />
            </button>
        </Link>
    );
}