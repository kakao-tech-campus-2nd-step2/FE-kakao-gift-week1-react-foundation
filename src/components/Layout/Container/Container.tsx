import React from 'react';
import './container.css';

interface ContainerProps {
    maxWidth?: string,
    children?: string,
    flexDirection?: 'row' | 'column',
    justifyContent: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around',
    alignItems: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch'
}

export const Container = ({
    maxWidth,
    children,
    flexDirection,
    justifyContent,
    alignItems,
    ...props
}: ContainerProps) => {
    return (
        <div className='storybook-container'
            style={{
                maxWidth: maxWidth,
                flexDirection: flexDirection,
                justifyContent: justifyContent,
                alignItems: alignItems
            }}
        >
            {children}
        </div>
    );
};