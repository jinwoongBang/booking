import React, { useCallback } from 'react';
import { Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LastWeekScreenProps } from '@src/pages/type';
import { useDispatch } from 'react-redux';
import { onRequestLogout } from '@src/slices/userSlice';

function LastWeekScreen({ navigation }: LastWeekScreenProps) {
  const dispatch = useDispatch();

  const onPress = useCallback(() => {
    // navigation.navigate('Details');
    dispatch(onRequestLogout());
  }, [dispatch]);

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Last Week Screen</Text>
      <Button title="로그아웃" onPress={onPress} />
      {/* <Button
        title="Update the title"
        onPress={() => navigation.setOptions({ title: 'Updated!' })}
      /> */}
    </SafeAreaView>
  );
}

export default LastWeekScreen;
