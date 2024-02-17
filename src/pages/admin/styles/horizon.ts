import { getStyled, pixelToRem } from '@/shared/utils';
import styled, { css } from 'styled-components';

//** Page */
export const PageHeader = styled.div`
  height: ${pixelToRem(140)};
  max-height: ${pixelToRem(140)};
`;
export const PageTitle = styled.h2`
  font-size: ${pixelToRem(34)};
  font-weight: 700;
  line-height: 120%;
`;

//** Container */
export const Container = styled.div`
  border-radius: 20px;
  background-color: #fff;
  padding: 25px 30px;
`;

// Container header
export const ContainerHeader = styled.div`
  min-height: ${pixelToRem(80)};
`;

export const ContainerTitle = styled.div`
  font-size: ${pixelToRem(24)};
  line-height: 130%;
  font-weight: 700;
`;

//** Common */
// export const Input = styled.input`
//   padding: 10px;
//   border-radius: 20px;

//   color: ${getStyled('admin', 'black')};

//   &::placeholder {
//     color: ${getStyled('admin', 'disabled')};
//   }
// `;

// type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'error';

// export const Button = styled.button<{
//   variant?: Variant;
//   color?: string;
// }>`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-width: ${pixelToRem(90)};
//   min-height: ${pixelToRem(35)};
//   padding: 0px 8px;
//   border-radius: 12px;
//   flex-shrink: 0;

//   font-size: 14px;
//   font-weight: 500;
//   line-height: 170%;

//   ${({ variant }) => {
//     switch (variant) {
//       case 'primary':
//         return css`
//           color: ${getStyled('white', 'high')};
//           background-color: ${getStyled('admin', 'primaryDark')};
//         `;
//       case 'secondary':
//         return css`
//           color: ${getStyled('admin', 'primary')};
//           background-color: ${getStyled('admin', 'background')};
//         `;
//       case 'success':
//         return css`
//           color: ${getStyled('admin', 'primary')};
//           background-color: ${getStyled('admin', 'success')};
//         `;
//       case 'warning':
//         return css`
//           color: ${getStyled('admin', 'primary')};
//           background-color: ${getStyled('admin', 'success')};
//         `;
//       case 'error':
//         return css`
//           color: ${getStyled('admin', 'primary')};
//           background-color: ${getStyled('admin', 'success')};
//         `;
//       default:
//         return css`
//           color: ${getStyled('admin', 'black')};
//           background-color: ${getStyled('white', 'high')};
//           border: 1px solid ${getStyled('admin', 'black')};
//         `;
//     }
//   }};
// `;
