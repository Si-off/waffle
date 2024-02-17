import 'styled-components';
import { styledColorOptions, styledFontOptions } from './theme';

type ColorsType = typeof styledColorOptions;
type FontsType = typeof styledFontOptions;

interface StyledType extends ColorsType, FontsType {}

declare module 'styled-components' {
  export interface DefaultTheme extends StyledType {}
}
