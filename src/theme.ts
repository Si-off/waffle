import { DefaultTheme } from 'styled-components';

export const styledOptions = {
  primary: {},
  secondary: {},
  title: {},
  paragraph: {},
  placeholder: {},
  screen: {},
  alert: {},
} as const;

const theme: DefaultTheme = { ...styledOptions };

export default theme;
