import { Dimensions, PixelRatio, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');

//Base design width and height.
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

// sizeScale based on actual design size
export const sizeScale = (size: number) => (width / guidelineBaseWidth) * size;
// sizeHeight calc height scale by base height
export const sizeHeight = (size: number) =>
  (height / guidelineBaseHeight) * size;

// sizeWidth calc width scale by base width and percentage of factor, default is 0.5
export const sizeWidth = (size: number, factor = 0.5) =>
  size + (sizeScale(size) - size) * factor;
export const sizeFont = (size: number) =>
  Platform.select({
    ios: (size + 1) * PixelRatio.getFontScale(),
    android: size * PixelRatio.getFontScale(),
  });
