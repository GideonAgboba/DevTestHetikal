import React from 'react';
import {
  Text as DefaultText,
  View as DefaultView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import Animated from 'react-native-reanimated';
import {Styles, Colors} from '../constants';
import useColorScheme from '../hooks/useColorScheme';

export function useThemeColor(
  props: {light?: string; dark?: string},
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type InputProps = ThemeProps & TextInput['props'];
export type ButtonProps = ThemeProps & TouchableOpacity['props'];

export function Text(props: TextProps) {
  const {style, lightColor, darkColor, ...otherProps} = props;
  const color = useThemeColor({light: lightColor, dark: darkColor}, 'text');

  return <DefaultText style={[{color}, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const {style, lightColor, darkColor, ...otherProps} = props;
  const backgroundColor = useThemeColor(
    {light: lightColor, dark: darkColor},
    'background',
  );

  return <DefaultView style={[{backgroundColor}, style]} {...otherProps} />;
}

export function Button(props: ButtonProps) {
  const colorScheme = useColorScheme();
  const {style, lightColor, darkColor, ...otherProps} = props;
  const backgroundColor = useThemeColor(
    {
      light: lightColor ? lightColor : Colors[colorScheme].tint,
      dark: darkColor ? darkColor : Colors['light'].background,
    },
    'background',
  );

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[{backgroundColor}, styles.button, style]}
      {...otherProps}
    />
  );
}

export function ButtonText(props: TextProps) {
  const colorScheme = useColorScheme();
  const {style, lightColor, darkColor, ...otherProps} = props;
  const color = useThemeColor(
    {
      light: lightColor ? lightColor : Colors[colorScheme].text,
      dark: darkColor ? darkColor : Colors[colorScheme].text,
    },
    'text',
  );

  return (
    <Animated.Text
      style={[{color}, styles.buttonText, style]}
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 45,
    borderColor: Colors.hash,
    borderWidth: 0.3,
    paddingHorizontal: 10,
    fontSize: 14,
    borderRadius: Styles.input.borderRadius,
  },
  button: {
    height: Styles.button.height,
    borderRadius: Styles.button.borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  buttonText: {
    fontSize: 13,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
});
