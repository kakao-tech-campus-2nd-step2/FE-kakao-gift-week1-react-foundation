import React from 'react';
import './underlineTextField.css';

interface UnderlineTextFieldProps {
    placeholder: string; // 버튼 글자
    disabled?: boolean; // 버튼 색 
    invalid?: boolean; // 버튼 크기 : 'responsive' | 'small' | 'medium' | 'large'
    size?: string;
}

/**
 * Primary UI component for user interaction
 */
export const UnderlineTextField = ({
    placeholder,
    disabled,
    invalid,
    size,
    ...props
}: UnderlineTextFieldProps) => {
    return (
        <input
            className={['storybook-input',
                `storybook-input--${size}`,
                invalid ? `storybook-input--invalid` : '',
                disabled ? 'storybook-input--disabled' : ''
            ].join(' ')}
            placeholder={placeholder}
            disabled={disabled}
            {...props}
        >
        </input>
    );
};