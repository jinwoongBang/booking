import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { RootState } from '@src/slices';
import { onLoginAction, onRequestLogout } from '@src/slices/userSlice';
import { commonScreens, userScreens, authScreens } from '@src/routes/paths';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Stack = createStackNavigator();

function AppLayout() {
  const dispatch = useDispatch();

  const { isLoggedIn, userId } = useSelector((state: RootState) => state.user);

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
            options={
              isLoggedIn
                ? {
                    headerTitle: () => (
                      <Image
                        style={{ width: 100, height: 50 }}
                        source={require('@src/asset/logos/malgn_logo21.png')}
                      />
                    ),
                    headerRight: () => <Button onPress={onLogout} title="로그아웃" />,
                  }
                : {
                    headerTitle: () => (
                      <Image
                        style={{ width: 100, height: 50 }}
                        source={require('@src/asset/logos/malgn_logo21.png')}
                      />
                    ),
                  }
            }
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
