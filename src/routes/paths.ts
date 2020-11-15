import HomeScreen from '@src/pages/HomeScreen';
import LastWeekScreen from '@src/pages/LastWeekScreen';
import LoginScreen from '@src/pages/LoginScreen';
import NextWeekScreen from '@src/pages/NextWeekScreen';
import ThisWeekScreen from '@src/pages/ThisWeekScreen';

export const commonScreens = {};

export const authScreens = {
  Login: LoginScreen,
};

export const userScreens = {
  Home: HomeScreen,
};

export const homeScreens = {
  LastWeek: LastWeekScreen,
  ThisWeek: ThisWeekScreen,
  NextWeek: NextWeekScreen,
};
