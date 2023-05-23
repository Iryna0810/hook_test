import React from "react";
import css from "../feedback.module.css";
import PropTypes from 'prop-types';

 export const FeedbackOptions = ({onLeaveFeedback, options}) => (
     <div className={css.counter__controls}>
         {options.map(option => <button type="button" name={option} key={option} className={css.button} onClick={onLeaveFeedback}>{option}</button>)}
    </div>
);

FeedbackOptions.propTypes = { onLeaveFeedback: PropTypes.func };
FeedbackOptions.propTypes = { options: PropTypes.array };


