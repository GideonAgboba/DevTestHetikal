import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Text} from '../../../components/Themed';
import {Colors} from '../../../constants';
import BellSvg from '../../../assets/images/bell.svg';
import {scale} from 'react-native-size-matters';

export default function Header() {
  return (
    <SafeAreaView style={[styles.row]}>
      <View style={{flex: 1}}>
        <View>
          <Text style={styles.name}>Toyosill,</Text>
          <Text style={styles.subText}>Hello, wash your hand 👋🏽</Text>
        </View>
      </View>
      <View style={{flex: 0}}>
        <BellSvg width={35} height={35} stroke={Colors.primary} size={35} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  row: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  name: {
    fontSize: scale(26),
    fontWeight: '700',
    textTransform: 'capitalize',
    fontFamily: 'GTWalsheimPro-Bold',
    marginBottom: scale(2),
  },
  subText: {
    fontSize: scale(12),
    opacity: 0.8,
    marginBottom: 0,
    fontFamily: 'GTWalsheimPro-Regular',
  },
  search: {
    shadowColor: Colors.primary,
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 24,
    width: scale(35),
    height: scale(35),
    paddingHorizontal: 0,
    justifyContent: 'center',
  },
});
