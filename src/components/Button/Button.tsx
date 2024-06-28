import React from 'react';
import './button.css';

interface ButtonProps {
    children: string; // 버튼 글자
    theme?: string; // 버튼 색 
    size?: string; // 버튼 크기 : 'responsive' | 'small' | 'medium' | 'large'
    onClick?: () => void; // 클릭 여부
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
    children,
    size = 'responsive',
    theme,
    ...props
}: ButtonProps) => {
    return (
        <button
            type="button"
            className={['storybook-button', `storybook-button--${size}`].join(' ')}
            style={{ backgroundColor: theme }}
            {...props}
        >
            {children}
        </button>
    );
};
