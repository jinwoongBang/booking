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
  Modal,
  Alert,
  TouchableHighlight,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
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
    zIndex: 999,
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    // margin: 20,
    // flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
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
  const [modalVisible, setModalVisible] = useState<boolean>(true);
  const [selectedValue, setSelectedValue] = useState('java');

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

  const onOpenModal = useCallback(() => {
    setModalVisible(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setModalVisible(false);
  }, []);

  return (
    <>
      <WeekList list={weekList} today={today} />
      <View style={styles.drawerButton}>
        <Button title="=" onPress={() => {}} />
      </View>
      <ReservationList onOpenModal={onOpenModal} />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>일정 등록</Text>
            {/* <View style={{ margin: 0, padding: 0 }}>
              <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 100 }}
                onValueChange={(itemValue, itemIndex) => {
                  setSelectedValue(String(itemValue));
                }}
              >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </View> */}
            <View style={{ flexDirection: 'row' }}>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
                onPress={onCloseModal}
              >
                <Text style={styles.textStyle}>등록</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={{
                  ...styles.openButton,
                  backgroundColor: '#ffffff',
                  borderColor: '#2196F3',
                  borderWidth: 1,
                }}
                onPress={onCloseModal}
              >
                <Text style={[styles.textStyle, { color: 'rgba(0, 0, 0, 1.0)' }]}>취소</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

export default ThisWeekScreen;
