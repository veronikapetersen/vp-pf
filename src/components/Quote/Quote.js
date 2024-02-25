import classes from './Quote.module.scss';

export default function Quote(props) {
    return (
        <>
            <section className={classes.wrapper}>
                <div className={classes['quotes__container']}>
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