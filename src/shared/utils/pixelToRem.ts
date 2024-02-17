const ROOT_FONT_SIZE = 16;

const pixelToRem = (pixel: number | number[]): string => {
  if (typeof pixel === 'number') return pixel / ROOT_FONT_SIZE + 'rem';

  return pixel.reduce((acc: string, current) => `${acc} ${current / ROOT_FONT_SIZE}rem`, '');
};

export default pixelToRem;
