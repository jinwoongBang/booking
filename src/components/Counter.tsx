import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, ScrollView, View, Text, Button } from 'react-native';
import { RootState } from '@src/slices';
import { onDecrementAction, onIncrementAction } from '@src/slices/couterSlice';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    fontSize: 100,
    fontWeight: 'bold',
  },
});

function Counter() {
  // const [number, setNumber] = useState<number>(0);

  const { number } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  const onPressIncrement = useCallback(() => {
    dispatch(onIncrementAction({ size: 1 }));
  }, [dispatch, onIncrementAction]);

  const onPressDecrement = useCallback(() => {
    dispatch(onDecrementAction({ size: 1 }));
  }, [onDecrementAction]);

  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{number}</Text>
      <View>
        <Button title="+1" onPress={onPressIncrement} />
        <Button title="-1" onPress={onPressDecrement} />
      </View>
    </View>
  );
}

export default Counter;
