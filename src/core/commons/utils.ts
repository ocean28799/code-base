import { Dimensions, Platform } from 'react-native';
import { OS } from './defines';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default class Utils {
  static isIOS = () => {
    return Platform.OS === OS.iOS;
  };

  static isAndroid = () => {
    return Platform.OS === OS.android;
  };

  static getScreenWidth = () => {
    return screenWidth;
  };

  static getScreenHeight = () => {
    return screenHeight;
  };

  static getHeightPercent = (percent: number) => {
    return screenHeight * percent * 0.01;
  };

  static getWidthPercent = (percent: number) => {
    return screenWidth * percent * 0.01;
  };

  static isEmptyString = (str?: String) => {
    const string = str !== undefined || str !== null ? String(str) : '';
    return !str || string.length === 0 || !string.trim();
  };

  static randomIntFromInterval = (min: number, max: number) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
}
