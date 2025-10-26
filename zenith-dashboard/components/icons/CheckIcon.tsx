import React from 'react';

export const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg 
        className={className || "w-4 h-4"}
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="3" 
            d="M5 13l4 4L19 7"
        ></path>
    </svg>
);
