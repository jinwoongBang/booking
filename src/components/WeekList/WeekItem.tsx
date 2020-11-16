import { DayList } from '@src/commons/constants/KeyFlowConstants';
import React from 'react';
import { View, Text } from 'react-native';
import { WeekItemProps } from './type';

function WeekItem({ date, today }: WeekItemProps) {
  return (
    <View
      key={date.getDate()}
      style={{
        flex: 1,
        justifyContent: 'center',
        height: 50,
        marginHorizontal: 5,
        borderWidth: today.getDate() === date.getDate() ? 1 : 0,
        borderRadius: today.getDate() === date.getDate() ? 50 : 0,
        borderColor: today.getDate() === date.getDate() ? 'skyblue' : 'none',
        backgroundColor: today.getDate() === date.getDate() ? 'skyblue' : 'none',
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          color: today.getDate() === date.getDate() ? '#ffffff' : 'gray',
        }}
      >
        {DayList[date.getDay()]}
      </Text>
      <Text
        style={{
          textAlign: 'center',
          color: today.getDate() === date.getDate() ? '#ffffff' : 'rgba(0, 0, 0, 1.0)',
        }}
      >
        {date.getDate()}
      </Text>
    </View>
  );
}
export default WeekItem;
