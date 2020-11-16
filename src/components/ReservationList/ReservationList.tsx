import React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { DataList } from '@src/commons/constants/KeyFlowConstants';
import { ReservationItem } from '@src/components/ReservationList';

const styles = StyleSheet.create({
  listContainer: {
    paddingTop: 20,
  },
});

function ReservationList() {
  return (
    <FlatList
      data={DataList}
      renderItem={({ item }) => <ReservationItem title={item.title} time={item.time} />}
      keyExtractor={item => item.id}
      style={styles.listContainer}
    />
  );
}

export default ReservationList;
