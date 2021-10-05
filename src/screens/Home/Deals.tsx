import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import {useIsFocused} from '@react-navigation/core';
import {View, Text} from '../../components/Themed';
import {Colors, Styles} from '../../constants';
import Nav from './layouts/Nav';
import BackSvg from '../../assets/images/back-dark.svg';
import {scale} from 'react-native-size-matters';
import IconOne from '../../assets/images/amafe.png';
import IconTwo from '../../assets/images/amexxser.png';
import IconThree from '../../assets/images/sephora.png';

const RATES = [
  {
    color: '#F4E4BD',
    icon: (
      <Image
        source={IconOne}
        resizeMode="contain"
        style={{width: scale(150)}}
      />
    ),
    title: '+ 5% Bonus',
    content: '00:56:32',
  },
  {
    color: '#D3F3D3',
    icon: (
      <Image
        source={IconTwo}
        resizeMode="contain"
        style={{width: scale(150)}}
      />
    ),
    title: '+ 3% Bonus',
    content: '02:36:24',
  },
  {
    color: '#E4F3FF',
    icon: (
      <Image
        source={IconThree}
        resizeMode="contain"
        style={{width: scale(150)}}
      />
    ),
    title: '+ 6% Bonus',
    content: '01:46:44',
  },
];

export default function Deals({navigation}) {
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      StatusBar.setBackgroundColor(Colors.white, true);
      StatusBar.setBarStyle('dark-content', true);
    }
  }, [isFocused]);

  return (
    <>
      <Nav
        navigation={navigation}
        bgColor={Colors.white}
        icon={<BackSvg width={24} height={24} size={24} />}
        title={<Text style={styles.title}>Today’s Deals</Text>}
        caption={
          <Text style={styles.subText}>
            Unique deals & discounts on giftcards.
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
              Check back everyday for more {'\n'}amazing deals
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

function Card({item}) {
  return (
    <View
      style={[
        styles.row,
        styles.card,
        {backgroundColor: item?.color || Colors.hash},
      ]}>
      <View lightColor="transparent" style={{flex: 1, marginLeft: scale(20)}}>
        <Text style={styles.cardTitle}>{item?.title}</Text>
        <Text style={styles.cardSubText}>{item?.content}</Text>
      </View>
      <View lightColor="transparent" style={{flex: 0}}>
        {item?.icon || <></>}
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
    paddingVertical: scale(10),
    paddingHorizontal: scale(20),
    borderRadius: scale(15),
    marginBottom: scale(20),
  },
  cardTitle: {
    fontSize: scale(19),
    fontFamily: 'GTWalsheimPro-Bold',
    marginBottom: scale(5),
  },
  cardSubText: {
    fontSize: scale(15),
    fontWeight: 'bold',
    fontFamily: 'GTWalsheimPro-Medium',
    color: Colors.red,
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
    marginBottom: 0,
    fontFamily: 'GTWalsheimPro-Regular',
    textAlign: 'center',
  },
});
