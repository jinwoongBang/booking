import React, { useCallback, useMemo, useState } from 'react';
import { StyleSheet, ScrollView, View, Text, StatusBar, Button, FlatList } from 'react-native';
import { ThisWeekScreenProps } from '@src/pages/type';
import Counter from '@src/components/Counter';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLock, faAirFreshener, faAnchor } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { RootState } from '@src/slices';
import { DayList } from '@src/commons/constants/KeyFlowConstants';

const DATA = [
  {
    id: Math.random().toString(12).substring(0),
    time: 9,
    title: `개발팀 주간보고`,
  },
  {
    id: Math.random().toString(12).substring(0),
    time: 10,
    title: `개발팀 주간보고`,
  },
  {
    id: Math.random().toString(12).substring(0),
    time: 11,
    title: `개발팀 주간보고`,
  },
  {
    id: Math.random().toString(12).substring(0),
    time: 12,
    title: `개발팀 주간보고`,
  },
  {
    id: Math.random().toString(12).substring(0),
    time: 13,
    title: `개발팀 주간보고`,
  },
  {
    id: Math.random().toString(12).substring(0),
    time: 14,
    title: `개발팀 주간보고`,
  },
  {
    id: Math.random().toString(12).substring(0),
    time: 15,
    title: `개발팀 주간보고`,
  },
  {
    id: Math.random().toString(12).substring(0),
    time: 16,
    title: `개발팀 주간보고`,
  },
  {
    id: Math.random().toString(12).substring(0),
    time: 17,
    title: `개발팀 주간보고`,
  },
  {
    id: Math.random().toString(12).substring(0),
    time: 18,
    title: `개발팀 주간보고`,
  },
];

const Item = ({ title, time }: { title: string; time: number }) => (
  <View style={styles.item}>
    <View
      style={{
        borderColor: 'gray',
        borderWidth: 1,
        width: 50,
      }}
    >
      <Text>{time}:00</Text>
    </View>
    <View
      style={{
        borderColor: 'gray',
        borderWidth: 1,
        //  flex: 1,
        width: 400,
      }}
    >
      <Text style={styles.title}>{title}</Text>
    </View>
    {/* <Text style={styles.title}>09:00</Text>
    <Text style={styles.title}>{title}</Text> */}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  row: {
    marginVertical: 20,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: 'skyblue',
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: 20,
    // marginVertical: 8,
    // marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

function ThisWeekScreen({ navigation }: ThisWeekScreenProps) {
  const { userId } = useSelector((state: RootState) => state.user);
  const [today, setToday] = useState(new Date());
  const [dateOfThisMonday, setDateOfThisMonday] = useState(() => {
    const day = new Date();
    const dateOfToday = today.getDate();
    const dayOfToday = today.getDay();
    const firstDay = dateOfToday - dayOfToday;
    day.setDate(firstDay);
    return day;
  });

  const dateOfWeekList = useMemo(() => {
    const thisMonday = dateOfThisMonday.getDate();
    const weekList = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date();
      day.setDate(thisMonday + i);
      weekList.push(day);
    }
    return weekList;
  }, [dateOfThisMonday]);

  return (
    <>
      <View
        style={{
          // flex: 1,
          flexDirection: 'row',
          // alignItems: 'flex-start',
          justifyContent: 'space-around',
          borderColor: 'gray',
          borderWidth: 1,
          // height: 100,
        }}
      >
        {dateOfWeekList.map(date => {
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
        })}
      </View>
      <View
        style={{
          borderColor: 'gray',
          borderWidth: 1,
        }}
      >
        <Button title="=" onPress={() => {}} />
      </View>
      <ScrollView>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} time={item.time} />}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </>
  );
}

export default ThisWeekScreen;
