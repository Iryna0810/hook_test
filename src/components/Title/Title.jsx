import React from "react";
import css from '../feedback.module.css';
import PropTypes from 'prop-types';

export const Title = ({ title, children }) => (
  <section>
    <h2 className = { css.tytle_feedback }>{title}</h2>
    {children}
  </section>
);

Title.propTypes = { title: PropTypes.string.isRequired, };