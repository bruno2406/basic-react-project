import React from 'react';
import P from 'prop-types'
import "./styles.css";

export const Button = ({ text, onClick, disabled = false }) => (
  <button
    className='button'
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
}
