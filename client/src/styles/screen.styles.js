import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 380;
const guidelineBaseHeight = 680;
const screenSize = Math.sqrt(width * height) / 100;


const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
    size + (scale(size) - size) * factor;


export { scale, verticalScale, moderateScale, screenSize, height, width };