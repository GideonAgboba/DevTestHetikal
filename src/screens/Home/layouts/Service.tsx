import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from '../../../components/Themed';
import {Colors} from '../../../constants';
import GifeCardSvg from '../../../assets/images/gift-card.svg';
import RateSvg from '../../../assets/images/rate.svg';
import DealsSvg from '../../../assets/images/deals.svg';
import {scale} from 'react-native-size-matters';

export default function Service({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get Started with ApexPay</Text>
      <View>
        <View style={{flex: 1}}>
          <TouchableOpacity
            activeOpacity={0.9}
            style={[styles.card, styles.gCard]}>
            <View style={[styles.row, {flex: 1}]}>
              <View style={{flex: 1}}>
                <Text style={styles.gCardText} lightColor={Colors.white}>
                  Sell Gift {'\n'}Card
                </Text>
              </View>
              <View style={{flex: 0}}>
                <GifeCardSvg width={92} height={92} size={92} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <View style={[styles.row, {marginTop: scale(15)}]}>
            <View
              style={{
                flex: 1,
                paddingRight: scale(7),
              }}>
              <TouchableOpacity
                activeOpacity={0.9}
                style={[styles.card, styles.gCard, styles.rCard]}
                onPress={() => navigation.navigate('Rates')}>
                <View>
                  <View>
                    <RateSvg width={45} height={45} size={45} />
                  </View>
                  <View>
                    <Text
                      style={[
                        styles.gCardText,
                        {fontSize: scale(15), marginVertical: scale(5)},
                      ]}
                      lightColor={Colors.white}>
                      High Rate Cards
                    </Text>
                  </View>
                  <View>
                    <Text lightColor={Colors.white}>
                      See which cards are high now
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1, paddingLeft: scale(7)}}>
              <TouchableOpacity
                activeOpacity={0.9}
                style={[styles.card, styles.gCard, styles.dCard]}
                onPress={() => navigation.navigate('Deals')}>
                <View>
                  <View>
                    <DealsSvg width={45} height={45} size={45} />
                  </View>
                  <View>
                    <Text
                      style={[
                        styles.gCardText,
                        {fontSize: scale(15), marginVertical: scale(5)},
                      ]}
                      lightColor={Colors.white}>
                      Today’s {'\n'}Deals
                    </Text>
                  </View>
                  <View>
                    <Text lightColor={Colors.white}>
                      Get sweet bonus on trades
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: scale(20),
  },
  row: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: scale(14),
    marginBottom: scale(15),
    fontFamily: 'GTWalsheimPro-Medium',
    fontWeight: 'bold',
  },
  card: {
    alignItems: 'center',
    borderRadius: scale(20),
  },
  gCard: {
    backgroundColor: '#025726',
    height: scale(110),
    paddingHorizontal: scale(20),
  },
  gCardText: {
    fontFamily: 'GTWalsheimPro-Bold',
    fontSize: scale(18),
  },
  rCard: {
    flex: 1,
    backgroundColor: '#6FCF97',
    height: scale(180),
    justifyContent: 'center',
  },
  dCard: {
    flex: 1,
    backgroundColor: '#27AE60',
    height: scale(180),
    justifyContent: 'center',
  },
});
