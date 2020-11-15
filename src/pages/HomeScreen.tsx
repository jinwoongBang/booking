import React, { useCallback } from 'react';
import { StyleSheet, ScrollView, View, Text, StatusBar, Button } from 'react-native';
import { ThisWeekScreenProps } from '@src/pages/type';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LastWeekScreen from './LastWeekScreen';
import NextWeekScreen from './NextWeekScreen';
import ThisWeekScreen from './ThisWeekScreen';

const Tab = createBottomTabNavigator();

function HomeScreen({ navigation }: ThisWeekScreenProps) {
  return (
    <Tab.Navigator initialRouteName="thisWeek">
      <Tab.Screen name="lastWeek" component={LastWeekScreen} options={{ title: '지난 주' }} />
      <Tab.Screen name="thisWeek" component={ThisWeekScreen} options={{ title: '이번 주' }} />
      <Tab.Screen name="nextWeek" component={NextWeekScreen} options={{ title: '다음 주' }} />
    </Tab.Navigator>
  );
}

export default HomeScreen;
