import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, StatusBar} from 'react-native';
import {useIsFocused} from '@react-navigation/core';
import {View, Text} from '../../components/Themed';
import {Colors, Styles} from '../../constants';
import Nav from './layouts/Nav';
import BackSvg from '../../assets/images/back-light.svg';
import {scale} from 'react-native-size-matters';
import Icon from '../../assets/images/exchange.svg';

const RATES = [
  {
    icon: <Icon width={60} height={60} size={60} />,
    title: 'American Express',
    content: 'Amex Gold 3779 (300-500)',
    rate: 'N 360 / $',
  },
  {
    icon: <Icon width={60} height={60} size={60} />,
    title: 'Apple Store',
    content: 'USA Single (500-2000)',
    rate: 'N 340 / $',
  },
  {
    icon: <Icon width={60} height={60} size={60} />,
    title: 'eBay',
    content: 'USA (100-500)',
    rate: 'N 310 / $',
  },
  {
    icon: <Icon width={60} height={60} size={60} />,
    title: 'Amazon',
    content: 'USA Cash Receipt (50-100)',
    rate: 'N 290 / $',
  },
  {
    icon: <Icon width={60} height={60} size={60} />,
    title: 'Best Buy',
    content: 'USA',
    rate: 'N 260 / $',
  },
  {
    icon: <Icon width={60} height={60} size={60} />,
    title: 'ColorPop',
    content: 'USA',
    rate: 'N 240 / $',
  },
  {
    icon: <Icon width={60} height={60} size={60} />,
    title: 'American Express',
    content: 'Amex Serve (300-500)',
    rate: 'N 210 / $',
  },
];

export default function Rates({navigation}) {
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      StatusBar.setBackgroundColor(Colors.primary, true);
      StatusBar.setBarStyle('light-content', true);
    }
  }, [isFocused]);

  return (
    <>
      <Nav
        navigation={navigation}
        bgColor={Colors.primary}
        icon={<BackSvg width={24} height={24} size={24} />}
        title={
          <Text style={styles.title} lightColor={Colors.white}>
            High Rate Cards 🔥
          </Text>
        }
        caption={
          <Text style={styles.subText} lightColor={Colors.white}>
            These are the cards with high rate currently.
          </Text>
        }
      />
      <SafeAreaView style={styles.container}>
        <ScrollView
          nestedScrollEnabled
          style={{flex: 1}}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <View
            style={{
              paddingTop: Styles.body.paddingVertical,
            }}>
            {RATES.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </View>
          <View style={{paddingVertical: scale(20)}}>
            <Text style={styles.more}>
              Check back everyday for more {'\n'}amazing rates
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

function Card({item}) {
  return (
    <View style={[styles.row, styles.card]}>
      <View style={{flex: 0}}>{item?.icon || <></>}</View>
      <View style={{flex: 1, marginLeft: scale(20)}}>
        <Text style={styles.cardTitle}>{item?.title}</Text>
        <Text style={styles.cardSubText}>{item?.content}</Text>
      </View>
      <View style={{flex: 0}}>
        <Text style={styles.cardRate}>{item?.rate}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Styles.body.paddingHorizontal,
    backgroundColor: Colors.white,
  },
  row: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
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
  card: {
    paddingBottom: scale(30),
  },
  cardTitle: {
    fontSize: scale(13),
    fontWeight: '900',
    fontFamily: 'GTWalsheimPro-Medium',
    marginBottom: scale(5),
  },
  cardSubText: {
    fontSize: scale(11),
    opacity: 0.8,
    marginBottom: 0,
    fontFamily: 'GTWalsheimPro-Regular',
  },
  cardRate: {
    fontSize: scale(14),
    fontWeight: '900',
    fontFamily: 'GTWalsheimPro-Bold',
    marginBottom: scale(5),
  },
  more: {
    fontSize: scale(13),
    opacity: 0.8,
    fontFamily: 'GTWalsheimPro-Regular',
    textAlign: 'center',
  },
});
