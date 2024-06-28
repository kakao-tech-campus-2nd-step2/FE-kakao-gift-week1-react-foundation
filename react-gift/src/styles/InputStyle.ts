export const Size= {
  small: `
    font-size: 12px;
    padding: 10px 20px;
  `,
  medium: `
    font-size: 14px;
    padding: 12px 24px;
  `,
  large: `
    font-size: 16px;
    padding: 14px 28px;
  `,
  responsive: `
    @media (max-width: 600px) {
      font-size: 12px;
      padding: 10px 20px;
    }
    @media (min-width: 601px) and (max-width: 1024px) {
      font-size: 14px;
      padding: 12px 24px;
    }
    @media (min-width: 1025px) {
      font-size: 16px;
      padding: 14px 28px;
    }
  `,
};

export const disabledStyle = `
  background-color: #f0f0f0;
  border: 1px solid #d0d0d0;
  color: #a0a0a0;
  cursor: not-allowed;
`;

export const invalidStyle = `
  border: 1px solid red;
  background-color: #ffe6e6;
`;
