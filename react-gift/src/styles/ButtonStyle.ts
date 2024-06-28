export const Size = {
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

export const Theme = {
  yellow:{
    normal:`
      background-color: yellow;
      color: black;
      border: 1px solid black;
    `,
    hover: `
    background-color: #F6F66A;
    color: white;
    border: 1px solid #333;
  `
  },
  black: {
    normal: `
      background-color: black;
      color: white;
      border: 1px solid black;
    `,
    hover: `
      background-color: #333;
      color: white;
      border: 1px solid #333;
    `,
  },
  white: {
    normal: `
      background-color: white;
      color: black;
      border: 1px solid black;
    `,
    hover: `
      background-color: #f0f0f0;
      color: black;
      border: 1px solid black;
    `,
  },
  brown: {
    normal: `
      background-color: brown;
      color: white;
      border: 1px solid brown;
    `,
    hover: `
      background-color: #a52a2a;
      color: white;
      border: 1px solid #a52a2a;
    `,
  },
};
