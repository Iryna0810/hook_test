import css from "../feedback.module.css"
import PropTypes from 'prop-types';

export const Notification = ({ message }) => (<h4 className={css.tytle_feedback}>{message}</h4>);

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}