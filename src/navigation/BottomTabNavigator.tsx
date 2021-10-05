import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import useColorScheme from '../hooks/useColorScheme';

import Home from '../screens/Home';
import Rates from '../screens/Home/Rates';
import Deals from '../screens/Home/Deals';
import Activity from '../screens/Activity';
import Wallet from '../screens/Wallet';
import Profile from '../screens/Profile';
import {Colors} from '../constants';
import HomeSvg from '../assets/images/home.svg';
import ActivitySvg from '../assets/images/activity.svg';
import WalletSvg from '../assets/images/wallet.svg';
import ProfileSvg from '../assets/images/profile.svg';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  return (
    <Tab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        inactiveTintColor: Colors[colorScheme].tabIconDefault,
        style: {
          backgroundColor: Colors[colorScheme].background,
          height: 65,
          flexDirection: 'row',
        },
      }}>
      <Tab.Screen
        name="TabOne"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <HomeSvg
              width={25}
              height={25}
              stroke={color}
              style={{marginBottom: -5}}
              size={25}
            />
          ),
        }}
        component={TabOneNavigator}
      />
      <Tab.Screen
        name="TabTwo"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <ActivitySvg
              width={25}
              height={25}
              stroke={color}
              style={{marginBottom: -5}}
              size={25}
            />
          ),
        }}
        component={TabTwoNavigator}
      />
      <Tab.Screen
        name="TabThree"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <WalletSvg
              width={25}
              height={25}
              stroke={color}
              style={{marginBottom: -5}}
              size={25}
            />
          ),
        }}
        component={TabThreeNavigator}
      />
      <Tab.Screen
        name="TabFour"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <ProfileSvg
              width={25}
              height={25}
              stroke={color}
              style={{marginBottom: -5}}
              size={25}
            />
          ),
        }}
        component={TabFourNavigator}
      />
    </Tab.Navigator>
  );
}

const TabOneStack = createStackNavigator();
function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <TabOneStack.Screen
        options={{
          headerShown: false,
        }}
        name="Rates"
        component={Rates}
      />
      <TabOneStack.Screen
        options={{
          headerShown: false,
        }}
        name="Deals"
        component={Deals}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator();
function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        options={{
          headerTitle: 'Activity',
        }}
        name="Activity"
        component={Activity}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator();
function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        options={{
          headerTitle: 'Wallet',
        }}
        name="Wallet"
        component={Wallet}
      />
    </TabThreeStack.Navigator>
  );
}

const TabFourStack = createStackNavigator();
function TabFourNavigator() {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        options={{
          headerTitle: 'Profile',
        }}
        name="Profile"
        component={Profile}
      />
    </TabFourStack.Navigator>
  );
}
