import React from 'react';

export const ChevronLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg 
        className={className}
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth="2"
    >
        <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
        ></path>
    </svg>
);