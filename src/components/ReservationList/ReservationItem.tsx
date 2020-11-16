import React from 'react';
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

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    flex: 1,
    height: 150,
    // alignItems: 'center',
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
    // borderColor: 'white',
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderTopWidth: 1,
    width: '85%',
    padding: 10,
  },
  contents: {
    backgroundColor: 'white',
    // borderRadius: 10,
    padding: 10,
    height: '100%',
  },
});

const ReservationItem = ({ title, time }: { title: string; time: number }) => (
  <View style={styles.item}>
    <View style={styles.timeContainer}>
      <Text style={styles.time}>{time}:00</Text>
    </View>
    <View style={styles.contentsContainer}>
      <View style={styles.contents}>
        <Text>{title}</Text>
      </View>
    </View>
  </View>
);

export default ReservationItem;
