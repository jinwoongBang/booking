import React, { useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import { WeekItem } from '@src/components/WeekList';
import { WeekListProps } from '@src/components/WeekList/type';

function WeekList({ list, today }: WeekListProps) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#ffffff',
        padding: 15,
      }}
    >
      {list.map(date => {
        return <WeekItem key={date.getDate()} date={date} today={today} />;
      })}
    </View>
  );
}
export default WeekList;
