import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 512 512"
  >
    <g clipPath="url(#clip0)" fill="none">
      <g transform="translate(6 6)">
        <circle cx="250" cy="250" r="250" fill="#263238" />
        <circle cx="250" cy="250" r="237.5" strokeWidth="25" stroke="#24C6DC" />
      </g>
      <path
        d="M78.5 348.5L185 110l87.5 142.5"
        strokeWidth="50"
        stroke="#24C6DC"
      />
      <path
        d="M192.5 416.5l148-314c59.5 51 95 124 52 212.5-43.132 88.772-111 101.5-200 101.5z"
        strokeWidth="50"
        stroke="#24C6DC"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="#fff" d="M0 0h512v512H0z" />
      </clipPath>
    </defs>
  </svg>
);

Logo.propTypes = {
  size: PropTypes.string.isRequired,
};

export default Logo;
