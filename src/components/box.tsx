import styled from "styled-components";

import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  background,
  border,
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
} from "styled-system";

export type BoxProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  GridProps &
  BackgroundProps &
  BorderProps &
  PositionProps &
  ShadowProps;

const Box = styled.div<BoxProps>`
  ${compose(
    space,
    color,
    layout,
    flexbox,
    grid,
    background,
    border,
    position,
    shadow,
  )}
`;

export default Box;
