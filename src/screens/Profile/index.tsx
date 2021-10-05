import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {View, Text} from '../../components/Themed';
import {Colors, Styles} from '../../constants';
import useColorScheme from '../../hooks/useColorScheme';

export default function Profile() {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: Colors[colorScheme].background},
      ]}>
      <View>
        <Text>There is nothing to see here also 😁✌🏽</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Styles.body.paddingHorizontal,
    paddingVertical: Styles.body.paddingVertical,
  },
});
