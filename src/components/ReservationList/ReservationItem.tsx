import React, { useCallback, useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  FlatList,
  Platform,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';
import { ReservationItemProps } from '@src/components/ReservationList/type';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    flex: 1,
    height: 150,
  },
  lastItem: {
    height: 0,
  },
  timeContainer: {
    borderColor: 'gray',
    width: '15%',
  },
  time: {
    textAlign: 'center',
    position: 'relative',
    top: -9,
    color: 'rgba(0, 0, 0, 0.47)',
  },
  contentsContainer: {
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderTopWidth: 1,
    width: '85%',
    padding: 10,
    // backgroundColor: '#ffffff',
  },
  contents: {
    flexDirection: 'row',
    backgroundColor: 'rgba(182, 182, 182, 0.1)',
    // borderRadius: 10,
    padding: 10,
    height: '100%',
  },
  writerContainer: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const ReservationItem = ({ title, time, isLast, onOpenModal }: ReservationItemProps) => {
  const onPress = useCallback(
    event => {
      console.log(time);
      onOpenModal();
    },
    [time, onOpenModal],
  );

  return (
    <View style={[styles.item]}>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{time}:00</Text>
      </View>
      <View style={styles.contentsContainer}>
        {isLast || (
          <TouchableOpacity style={styles.contents} onLongPress={onPress}>
            <View></View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default ReservationItem;
