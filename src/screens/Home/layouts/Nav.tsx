import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Colors, Styles} from '../../../constants';
import {scale} from 'react-native-size-matters';

export default function Nav({navigation, bgColor, icon, title, caption}) {
  return (
    <View
      style={[styles.container, {backgroundColor: bgColor || Colors.white}]}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.goBack()}
        style={styles.icon}>
        {icon || <></>}
      </TouchableOpacity>
      <View>
        {title || <></>}
        {caption || <></>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Styles.body.paddingHorizontal,
    paddingVertical: scale(25),
  },
  icon: {
    paddingBottom: scale(30),
  },
});
