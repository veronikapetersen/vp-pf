import classes from './Menu.module.scss';
import Link from 'next/link';

export default function Menu() {

    return (
        <div className={classes['stage-perspective']}>
            <div className={classes.stage}>
                <ul className={classes.list}>
                    <li className={classes.menulink}><Link href="#">Home</Link></li>
                    <li className={classes.menulink}><Link href="#">Home</Link></li>
                    <li className={classes.menulink}><Link href="#">Home</Link></li>
                    <li className={classes.menulink}><Link href="#">Home</Link></li>
                    <li className={classes.menulink}><Link href="#">Home</Link></li>
                    <li className={classes.menulink}><Link href="#">Home</Link></li>
                    <li className={classes.menulink}><Link href="#">Home</Link></li>
                    <li className={classes.menulink}><Link href="#">Home</Link></li>
                    <li className={classes.menulink}><Link href="#">Home</Link></li>
                    <li className={classes.menulink}><Link href="#">Home</Link></li>
                    <li className={classes.menulink}><Link href="#">Home</Link></li>
                    <li className={classes.menulink}><Link href="#">Home</Link></li>
                    <li className={classes.menulink}><Link href="#">Home</Link></li>
                    <li className={classes.menulink}><Link href="#">Home</Link></li>
                    <li className={classes.menulink}><Link href="#">Home</Link></li>
                    <li className={classes.menulink}><Link href="#">Home</Link></li>
                    <li className={classes.menulink}><Link href="#">Home</Link></li>
                </ul>
            </div>
        </div>
    );
}
