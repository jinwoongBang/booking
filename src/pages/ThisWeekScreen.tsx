import React, { useCallback } from 'react';
import { StyleSheet, ScrollView, View, Text, StatusBar, Button } from 'react-native';
import { ThisWeekScreenProps } from '@src/pages/type';
import Counter from '@src/components/Counter';

function ThisWeekScreen({ navigation }: ThisWeekScreenProps) {
  const onPress = useCallback(() => {
    navigation.navigate('Details');
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This Week Screen</Text>
      <Button title="Go to Details" onPress={onPress} />
    </View>
  );
}

export default ThisWeekScreen;
