import React, { useCallback } from 'react';
import { StyleSheet, ScrollView, View, Text, StatusBar, Button } from 'react-native';
import { LoginScreenProps } from '@src/pages/type';
import { TextInput } from 'react-native-gesture-handler';
import { onLoginAction, onRequestLogin } from '@src/slices/userSlice';
import { useDispatch } from 'react-redux';

function LoginScreen({ navigation }: LoginScreenProps) {
  const dispatch = useDispatch();

  const onPress = useCallback(() => {
    navigation.navigate('ThisWeek');
  }, [navigation]);

  const onLogin = useCallback(() => {
    dispatch(
      onRequestLogin({
        userId: 'keyflow',
        password: 'keyflow',
      }),
    );
    // navigation.navigate('ThisWeek');
  }, [dispatch]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>아이디</Text>
      <TextInput />
      <Text>비밀번호</Text>
      <TextInput />
      <Button title="로그인" onPress={onLogin} />
    </View>
  );
}

export default LoginScreen;
