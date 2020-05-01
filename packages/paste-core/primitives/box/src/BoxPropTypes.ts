import * as PropTypes from 'prop-types';
import {
  isPaddingTokenProp,
  isMarginTokenProp,
  isWidthTokenProp,
  isMinWidthTokenProp,
  isMaxWidthTokenProp,
  isHeightTokenProp,
  isMinHeightTokenProp,
  isMaxHeightTokenProp,
  isBackgroundColorTokenProp,
  isBorderRadiusTokenProp,
  isBorderColorTokenProp,
  isBorderWidthTokenProp,
  isBoxShadowTokenProp,
  ResponsiveProp,
} from '@twilio-paste/style-props';

export const BoxPropTypes = {
  as: PropTypes.string as any,
  // Generic
  cursor: ResponsiveProp(PropTypes.string),
  content: ResponsiveProp(PropTypes.string),
  appearance: ResponsiveProp(PropTypes.string),
  animation: ResponsiveProp(PropTypes.string),
  transform: ResponsiveProp(PropTypes.string),
  transformOrigin: ResponsiveProp(PropTypes.string),
  visibility: ResponsiveProp(PropTypes.string),
  whiteSpace: ResponsiveProp(PropTypes.string),
  userSelect: ResponsiveProp(PropTypes.string),
  pointerEvents: ResponsiveProp(PropTypes.string),
  boxSizing: ResponsiveProp(PropTypes.string),
  resize: ResponsiveProp(PropTypes.string),
  transition: ResponsiveProp(PropTypes.string),
  listStyleType: ResponsiveProp(PropTypes.string),
  listStylePosition: ResponsiveProp(PropTypes.string),
  listStyleImage: ResponsiveProp(PropTypes.string),
  objectFit: ResponsiveProp(PropTypes.string),
  objectPosition: ResponsiveProp(PropTypes.string),
  backgroundAttachment: ResponsiveProp(PropTypes.string),
  outline: ResponsiveProp(PropTypes.string),
  float: ResponsiveProp(PropTypes.string),
  willChange: ResponsiveProp(PropTypes.string),
  // layout
  width: isWidthTokenProp,
  minWidth: isMinWidthTokenProp,
  maxWidth: isMaxWidthTokenProp,
  height: isHeightTokenProp,
  minHeight: isMinHeightTokenProp,
  maxHeight: isMaxHeightTokenProp,
  size: isWidthTokenProp,
  display: ResponsiveProp(PropTypes.string),
  verticalAlign: ResponsiveProp(PropTypes.string),
  overflow: ResponsiveProp(PropTypes.string),
  overflowX: ResponsiveProp(PropTypes.string),
  overflowY: ResponsiveProp(PropTypes.string),
  // position
  position: ResponsiveProp(PropTypes.string),
  top: ResponsiveProp(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  right: ResponsiveProp(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  bottom: ResponsiveProp(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  left: ResponsiveProp(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  zIndex: ResponsiveProp(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  // space
  margin: isMarginTokenProp,
  marginTop: isMarginTokenProp,
  marginRight: isMarginTokenProp,
  marginBottom: isMarginTokenProp,
  marginLeft: isMarginTokenProp,
  padding: isPaddingTokenProp,
  paddingTop: isPaddingTokenProp,
  paddingRight: isPaddingTokenProp,
  paddingBottom: isPaddingTokenProp,
  paddingLeft: isPaddingTokenProp,
  // background
  background: ResponsiveProp(PropTypes.string),
  backgroundColor: isBackgroundColorTokenProp,
  backgroundImage: ResponsiveProp(PropTypes.string),
  backgroundSize: ResponsiveProp(PropTypes.string),
  backgroundPosition: ResponsiveProp(PropTypes.string),
  backgroundRepeat: ResponsiveProp(PropTypes.string),
  // border
  borderRadius: isBorderRadiusTokenProp,
  borderBottomLeftRadius: isBorderRadiusTokenProp,
  borderBottomRightRadius: isBorderRadiusTokenProp,
  borderTopLeftRadius: isBorderRadiusTokenProp,
  borderTopRightRadius: isBorderRadiusTokenProp,
  borderWidth: isBorderWidthTokenProp,
  borderBottomWidth: isBorderWidthTokenProp,
  borderLeftWidth: isBorderWidthTokenProp,
  borderRightWidth: isBorderWidthTokenProp,
  borderTopWidth: isBorderWidthTokenProp,
  borderColor: isBorderColorTokenProp,
  borderBottomColor: isBorderColorTokenProp,
  borderLeftColor: isBorderColorTokenProp,
  borderRightColor: isBorderColorTokenProp,
  borderTopColor: isBorderColorTokenProp,
  borderStyle: ResponsiveProp(PropTypes.string),
  borderTopStyle: ResponsiveProp(PropTypes.string),
  borderRightStyle: ResponsiveProp(PropTypes.string),
  borderBottomStyle: ResponsiveProp(PropTypes.string),
  borderLeftStyle: ResponsiveProp(PropTypes.string),
  // shadow
  boxShadow: isBoxShadowTokenProp,
  // flexbox
  alignItems: ResponsiveProp(PropTypes.string),
  alignContent: ResponsiveProp(PropTypes.string),
  justifyItems: ResponsiveProp(PropTypes.string),
  justifyContent: ResponsiveProp(PropTypes.string),
  flexWrap: ResponsiveProp(PropTypes.string),
  flexDirection: ResponsiveProp(PropTypes.string),
  flex: ResponsiveProp(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  flexGrow: ResponsiveProp(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  flexShrink: ResponsiveProp(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  flexBasis: ResponsiveProp(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  justifySelf: ResponsiveProp(PropTypes.string),
  alignSelf: ResponsiveProp(PropTypes.string),
  order: ResponsiveProp(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};
