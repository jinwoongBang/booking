import React, { useCallback } from 'react';
import { StyleSheet, ScrollView, View, Text, StatusBar, Button } from 'react-native';
import { NextWeekScreenProps } from '@src/pages/type';

function NextWeekScreen({ navigation }: NextWeekScreenProps) {
  const onPress = useCallback(() => {
    navigation.navigate('Details');
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Next Week Screen</Text>
    </View>
  );
}

export default NextWeekScreen;
