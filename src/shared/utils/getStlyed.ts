import { styledOptions } from '@/theme';
import { DefaultTheme, css } from 'styled-components';

type Key = keyof typeof styledOptions;

const getStyled = <T extends Key, P extends keyof DefaultTheme[T]>(key: T, subKey: P) => {
  return css`
    ${({ theme }) => theme[key][subKey] ?? ''}
  `;
};

export default getStyled;
