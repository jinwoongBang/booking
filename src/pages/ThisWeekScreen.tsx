import React, { useCallback, useMemo, useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  FlatList,
  Platform,
} from 'react-native';
import { ThisWeekScreenProps } from '@src/pages/type';
import { useSelector } from 'react-redux';
import { RootState } from '@src/slices';
import { ReservationList } from '@src/components/ReservationList';
import { WeekList } from '@src/components/WeekList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // paddingHorizontal: 10,
  },
  row: {
    marginVertical: 20,
  },
  drawerButton: {
    // borderWidth: 1,
    backgroundColor: '#ffffff',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    shadowColor: '#4d4d4d',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#4d4d4d',
        shadowOffset: { width: 8, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: { elevation: 8 },
    }),
  },
});

function ThisWeekScreen({ navigation }: ThisWeekScreenProps) {
  const { userId } = useSelector((state: RootState) => state.user);

  const [today, setToday] = useState<Date>(new Date());
  const [thisMonday, setThisMonday] = useState<Date>(() => {
    const day = new Date();
    const dateOfToday = today.getDate();
    const dayOfToday = today.getDay();
    const firstDay = dateOfToday - dayOfToday;
    day.setDate(firstDay);
    return day;
  });

  const weekList: Date[] = useMemo(() => {
    const dateOfMonday = thisMonday.getDate();
    const weekList = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date();
      day.setDate(dateOfMonday + i);
      weekList.push(day);
    }
    return weekList;
  }, [thisMonday]);

  return (
    <>
      <WeekList list={weekList} today={today} />
      <View style={styles.drawerButton}>
        <Button title="=" onPress={() => {}} />
      </View>
      <ReservationList />
    </>
  );
}

export default ThisWeekScreen;
