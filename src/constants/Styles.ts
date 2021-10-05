import { Platform } from "react-native";
import {scale} from 'react-native-size-matters';

export const Styles = {
  body: {
    paddingHorizontal: scale(20),
    paddingVertical: scale(15),
  },
  input: {
    height: Platform.OS === "android" ? scale(45) : scale(50),
    borderRadius: scale(5),
    label: {
      fontSize: scale(15),
    },
  },
  button: {
    borderRadius: scale(8),
    height: scale(45),
  },
};