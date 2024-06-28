import React from 'react';
import './grid.css';

interface GridProps {
    gap: number,
    columns: number,
    children: React.ReactNode
}

export const Grid = ({
    gap,
    columns,
    children,
    ...props
}: GridProps) => {
    return (
        <div className='storybook-grid'
            style={{
                gap: gap,
                gridTemplateColumns: `repeat(${columns}, 1fr)`, // columns prop에 따라 세로 줄 수 설정
            }}
        >
            {children}
        </div>
    );
};