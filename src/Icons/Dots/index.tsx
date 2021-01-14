import React from 'react';

export const Dots: React.FC = props => {
  return (
    <svg
      width="24"
      height="24"
      stroke="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <g>
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
        ></path>
      </g>
    </svg>
  );
};
