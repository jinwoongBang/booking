import React, { useCallback, useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import { LoginScreenProps } from '@src/pages/type';
// import { TextInput } from 'react-native-gesture-handler';
import { onLoginAction, onRequestLogin } from '@src/slices/userSlice';
import { useDispatch } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  row: {
    marginVertical: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

function LoginScreen({ navigation }: LoginScreenProps) {
  const dispatch = useDispatch();

  const [userId, setUserId] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');

  const onLogin = useCallback(() => {
    dispatch(
      onRequestLogin({
        userId: userId,
        password: userPassword,
      }),
    );
  }, [dispatch, userId, userPassword]);

  const onChangeUserId = useCallback((text: string) => {
    setUserId(text);
  }, []);
  const onChangeUserPassword = useCallback((text: string) => {
    setUserPassword(text);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>아이디</Text>
        <TextInput
          style={{ borderColor: 'gray', borderWidth: 1 }}
          value={userId}
          onChangeText={onChangeUserId}
        />
      </View>
      <View style={styles.row}>
        <Text>비밀번호</Text>
        <TextInput
          style={{ borderColor: 'gray', borderWidth: 1 }}
          value={userPassword}
          onChangeText={onChangeUserPassword}
        />
      </View>
      <View style={styles.row}>
        <TouchableHighlight onPress={onLogin}>
          <View style={styles.button}>
            <Text>로그인</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default LoginScreen;
