'use client';
import classes from './BackButton.module.scss';
import Link from 'next/link';

export default function BackButton() {

    return (
        <Link href="/">
            <button className={classes['back-button']}>
                <img src="/assets/arrow_back.svg" alt="Back" />
            </button>
        </Link>
    );
}