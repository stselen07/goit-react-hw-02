
import css from "./Feedback.module.css"
export default function Feedback({ good, bad, neutral, total, positivFeedBack }) {
    
 
    
    return (
        <ul className={css.list}>
                    <li className = {css.item}>Good: {good}</li>
                    <li className = {css.item}>Neutral: {neutral}</li>
                    <li className = {css.item}>Bad: {bad}</li>
                    <li className = {css.item}>Total: {total}</li>
                    <li className = {css.item}>Positiv: {positivFeedBack}%</li>
            </ul>
    );
}