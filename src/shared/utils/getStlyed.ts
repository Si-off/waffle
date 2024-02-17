import { styledColorOptions, styledFontOptions } from '@/theme';
import { DefaultTheme, css } from 'styled-components';

type ColorsKey = keyof typeof styledColorOptions;
type FontsKey = keyof typeof styledFontOptions;

export const getStyledColor = <T extends ColorsKey, P extends keyof DefaultTheme[T]>(
  key: T,
  subKey: P,
) => {
  return css`
    ${({ theme }) => (typeof theme[key] === 'object' ? theme[key][subKey] ?? '' : theme[key] ?? '')}
  `;
};

export const getStyledFont = <T extends FontsKey, P extends keyof DefaultTheme[T]>(
  key: T,
  subKey: P,
) => {
  return css`
    ${({ theme }) => theme[key][subKey] ?? ''}
  `;
};
