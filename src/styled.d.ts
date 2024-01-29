import 'styled-components';
import { styledOptions } from './theme';

type StyledType = typeof styledOptions;

declare module 'styled-components' {
  export interface DefaultTheme extends StyledType {}
}
