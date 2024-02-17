import { DefaultTheme } from 'styled-components';
import { pixelToRem } from './utils';

export const styledColorOptions = {
  primary: '#518581',
  secondary: '#FFB23F',
  text: '#151411',
  paragraph: '#AFADB5',
  placeholder: '#F9F9F9',
  screen: '#FFFFFF',
  line: '#FFFFFF',
  alert_primary: {
    success: '#2E7D32',
    info: '#0288D1',
    warning: '#ED6C02',
    error: '#D32F2F',
  },
  alert_secondary: {
    success: '#EDF7ED',
    info: '#E5F6FD',
    warning: '#FFF4E5',
    error: '#FDEDED',
  },
} as const;

export const styledFontOptions = {
  heading: {
    h1: { fontWeight: '700', fontSize: pixelToRem(64), lineHeight: '130%' },
    h2: { fontWeight: '700', fontSize: pixelToRem(44), lineHeight: '130%' },
    h3: { fontWeight: '700', fontSize: pixelToRem(24), lineHeight: '130%' },
    h4: { fontWeight: '700', fontSize: pixelToRem(20), lineHeight: '130%' },
    h5: { fontWeight: '700', fontSize: pixelToRem(18), lineHeight: '130%' },
    h6: { fontWeight: '700', fontSize: pixelToRem(16), lineHeight: '130%' },
  },
  label: {
    l1: { fontWeight: '700', fontSize: pixelToRem(12), lineHeight: '130%' },
    l2: { fontWeight: '700', fontSize: pixelToRem(14), lineHeight: '130%' },
    l3: { fontWeight: '700', fontSize: pixelToRem(16), lineHeight: '130%' },
  },
  p: {
    p1: { fontWeight: '500', fontSize: pixelToRem(14), lineHeight: '180%' },
    p2: { fontWeight: '500', fontSize: pixelToRem(16), lineHeight: '180%' },
    p3: { fontWeight: '500', fontSize: pixelToRem(18), lineHeight: '180%' },
    p4: { fontWeight: '500', fontSize: pixelToRem(12), lineHeight: '180%' },
  },
} as const;

const theme: DefaultTheme = { ...styledColorOptions, ...styledFontOptions };

export default theme;
