import  css from "./Options.module.css"
export default function Options({ updateFeedback,  show}) {
    
         return <div className={css.feedbackContainer}>
            <button className={css.feedbackBtn} onClick={() => updateFeedback("good")} >Good</button>
            <button className={css.feedbackBtn} onClick={() => updateFeedback("neutral")}>Neutral</button>
            <button className={css.feedbackBtn} onClick={() => updateFeedback("bad")}>Bad</button>
             {
                 show > 0 && <button className={css.feedbackBtn} onClick={() => updateFeedback("resetAll")}>Reset</button>
             }
        </div>
}