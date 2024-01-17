import classes from './Menu.module.scss';
import Link from 'next/link';

export default function Menu() {

    return (
        <div className={classes['stage-perspective']}>
            <div className={classes.stage}>
                <ul className={classes.list}>
                    <li className={classes.menulink}><Link href="#">Spotify Stats</Link></li>
                    <li className={classes.menulink}><Link href="#">Viking Bar</Link></li>
                    <li className={classes.menulink}><Link href="#">KWR</Link></li>
                    <li className={classes.menulink}><Link href="#">ERST</Link></li>
                    <li className={classes.menulink}><Link href="#"><span>HTML5 Banner</span> <br></br> <span>Generator</span></Link></li>
                    <li className={classes.menulink}><Link href="#">YogaLand</Link></li>
                </ul>
            </div>
        </div>
    );
}
