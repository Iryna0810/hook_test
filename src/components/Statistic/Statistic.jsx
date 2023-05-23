import css from "../feedback.module.css"
import { Notification } from "./Notification";
import PropTypes from 'prop-types';


export function Statistic ({ good, neutral, bad, total, positiveFeedback }) {
    
    // const { good, neutral, bad, total, positiveFeedback } = this.props;
    const totalScore = total();
    const positiveFeedbackScore = positiveFeedback();

        return (
        <div>
            <h3 className={css.tytle_statistic}>Statistics</h3>
            
                {totalScore === 0 ? (<Notification message="There is no feedback"></Notification>)
                    : (
            <div className={css.container_stat}>
            <p className="statistick">Good: {good}</p>
            <p className="statistick">Neutral: {neutral}</p>
            <p className="statistick">Bad: {bad}</p>
            <p className="statistick">Total: {totalScore}</p>
            <p className="statistick">Positive feedback: {totalScore === 0? 0 : Math.floor(positiveFeedbackScore * 100) / 100} %</p>
            </div>
          
                    )}
        </div>        
        )
};

    
Statistic.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.func,
    positiveFeedback: PropTypes.func,

}