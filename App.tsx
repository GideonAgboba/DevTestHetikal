import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import Navigation from './src/navigation';
import {Colors} from './src/constants';
import useColorScheme from './src/hooks/useColorScheme';

export default function App() {
  const colorScheme = useColorScheme();
  return (
    <>
      <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
      <Navigation colorScheme={colorScheme} />
    </>
  );
}
