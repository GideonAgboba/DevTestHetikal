import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {useIsFocused} from '@react-navigation/core';
import {Colors, Styles} from '../../constants';
import Header from './layouts/Header';
import Cards from './layouts/Cards';
import Service from './layouts/Service';

const CARDS = [
  {
    title: 'current balance', // could be bank name
    year: '28',
    month: '10',
    cvv: '123',
    number: '1234123412341234',
    holder: 'agboba taiwo joshua',
    currency: 'usd',
    balance: '0',
    priColor: Colors.warning,
    secColor: Colors.warninglight,
    isDefault: true,
  },
  {
    title: 'current balance', // could be bank name
    year: '28',
    month: '10',
    cvv: '123',
    number: '1234123412341234',
    holder: 'agboba taiwo joshua',
    currency: 'usd',
    balance: '3048.75',
    priColor: Colors.warning,
    secColor: Colors.warninglight,
  },
  {
    title: 'current balance', // could be bank name
    year: '28',
    month: '10',
    cvv: '123',
    number: '1234123412341234',
    holder: 'agboba kehinde gideon',
    currency: 'ngn',
    balance: '248000.00',
    priColor: Colors.blue,
    secColor: Colors.lightblue,
  },
  {
    title: 'current balance', // could be bank name
    year: '28',
    month: '10',
    cvv: '123',
    number: '1234123412341234',
    holder: 'henry chase',
    currency: 'usd',
    balance: '1200.00',
    priColor: Colors.info,
    secColor: Colors.infolight,
  },
];

export default function Home({navigation}) {
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      StatusBar.setBackgroundColor(Colors.white, true);
      StatusBar.setBarStyle('dark-content', true);
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        nestedScrollEnabled
        style={{flex: 1}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={{paddingTop: Styles.body.paddingVertical}} />
        <Header />
        <Cards cards={CARDS} />
        <Service navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Styles.body.paddingHorizontal,
    backgroundColor: Colors.white,
  },
});
