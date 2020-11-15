import React, { useCallback } from 'react';
import { StyleSheet, ScrollView, View, Text, StatusBar, Button } from 'react-native';
import { ThisWeekScreenProps } from '@src/pages/type';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LastWeekScreen from '@src/pages/LastWeekScreen';
import NextWeekScreen from '@src/pages/NextWeekScreen';
import ThisWeekScreen from '@src/pages/ThisWeekScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faReply, faShare, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

function HomeScreen({ navigation }: ThisWeekScreenProps) {
  return (
    <Tab.Navigator
      initialRouteName="ThisWeek"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const { name } = route;
          switch (name) {
            case 'LastWeek':
              return <FontAwesomeIcon icon={faReply} size={size} color={color} />;
            case 'ThisWeek':
              return <FontAwesomeIcon icon={faCalendarAlt} size={size} color={color} />;
            case 'NextWeek':
              return <FontAwesomeIcon icon={faShare} size={size} color={color} />;
          }
        },
      })}
    >
      <Tab.Screen name="LastWeek" component={LastWeekScreen} options={{ title: '지난 주' }} />
      <Tab.Screen name="ThisWeek" component={ThisWeekScreen} options={{ title: '이번 주' }} />
      <Tab.Screen name="NextWeek" component={NextWeekScreen} options={{ title: '다음 주' }} />
    </Tab.Navigator>
  );
}

export default HomeScreen;
