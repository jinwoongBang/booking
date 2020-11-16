import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { DataList } from '@src/commons/constants/KeyFlowConstants';
import { ReservationItem } from '@src/components/ReservationList';
import { ReservationListProps } from '@src/components/ReservationList/type';

const styles = StyleSheet.create({
  root: {},
  listContainer: {
    paddingVertical: 20,
  },
});

function ReservationList({ onOpenModal }: ReservationListProps) {
  return (
    <View style={styles.root}>
      <ScrollView style={styles.listContainer}>
        {DataList.map((item, index) => (
          <ReservationItem
            key={item.id}
            title={item.title}
            time={item.time}
            isLast={index === DataList.length - 1}
            onOpenModal={onOpenModal}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default ReservationList;
