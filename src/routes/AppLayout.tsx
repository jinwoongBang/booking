import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '@src/pages/LoginScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import LastWeekScreen from '@src/pages/LastWeekScreen';
import NextWeekScreen from '@src/pages/NextWeekScreen';
import ThisWeekScreen from '@src/pages/ThisWeekScreen';
import { RootState } from '@src/slices';
import { onLoginAction, onRequestLogout } from '@src/slices/userSlice';
import HomeScreen from '@src/pages/HomeScreen';

const commonScreens = {};

const authScreens = {
  Login: LoginScreen,
};

const userScreens = {
  Home: HomeScreen,
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AppLayout() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: RootState) => state.user);
  const onLogout = useCallback(() => {
    dispatch(onRequestLogout());
  }, [dispatch]);

  return (
    <NavigationContainer>
      {/* [1] Stack Navigator */}
      <Stack.Navigator>
        {Object.entries({
          ...commonScreens,
          ...(isLoggedIn ? userScreens : authScreens),
        }).map(([name, component]) => (
          <Stack.Screen
            key={name}
            name={name}
            component={component}
            options={{
              headerRight: () => <Button onPress={onLogout} title="Info" color="#fff" />,
            }}
          />
        ))}
        {/* test */}
      </Stack.Navigator>

      {/* [2] Tab Navigator */}
      {/* <Tab.Navigator initialRouteName="이번 주">
      <Tab.Screen name="lastWeek" component={LastWeekScreen} options={{ title: '지난 주' }} />
      <Tab.Screen name="thisWeek" component={ThisWeekScreen} options={{ title: '이번 주' }} />
      <Tab.Screen name="nextWeek" component={NextWeekScreen} options={{ title: '다음 주' }} />
    </Tab.Navigator> */}

      {/* [3] 로그인 로그아웃 로직 */}
      {/* {isLoggedIn ? (
          <Stack.Screen name="thisWeek" component={ThisWeekScreen} />
        ) : (
          <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{ title: 'Sign in', animationTypeForReplace: !isLoggedIn ? 'pop' : 'push' }}
          />
        )} */}
    </NavigationContainer>
  );
}

export default AppLayout;
