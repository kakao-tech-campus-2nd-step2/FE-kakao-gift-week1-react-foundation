export const ratioStyles = (ratio: number | string) => {
  if (typeof ratio === 'string' && ratio === 'square') {
    return `
      position: relative;
      &::before {
        content: '';
        display: block;
        padding-top: 100%;
      }
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    `;
  }
  if (typeof ratio === 'number') {
    return `
      position: relative;
      &::before {
        content: '';
        display: block;
        padding-top: ${(1 / ratio) * 100}%;
      }
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    `;
  }
  return '';
};

export const radiusStyles = (radius: number | string) => {
  if (typeof radius === 'string' && radius === 'circle') {
    return `
      border-radius: 50%;
    `;
  }
  if (typeof radius === 'number') {
    return `
      border-radius: ${radius}px;
    `;
  }
  return '';
};
