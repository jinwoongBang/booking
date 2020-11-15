/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useCallback } from 'react';
import { StyleSheet, ScrollView, View, Text, StatusBar, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// declare const global: { HermesInternal: null | {} };

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

type HomeScreenProps = {
  navigation: any;
};
type DetailScreenProps = {
  navigation: any;
};

function HomeScreen({ navigation }: HomeScreenProps) {
  const onPress = useCallback(() => {
    navigation.navigate('Details');
  }, [navigation]);

  return (
    <>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="Go to Details" onPress={onPress} />
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Messages" component={MessageScreen} />
      </Tab.Navigator>
    </>
  );
}

function DetailsScreen({ navigation }: DetailScreenProps) {
  const onPress = useCallback(() => {
    navigation.navigate('Details');
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen - safe area view</Text>
      <Button title="Go Back to Details" onPress={onPress} />
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({ title: 'Updated!' })}
      />
    </SafeAreaView>
  );
}

function FeedScreen({ navigation }: DetailScreenProps) {
  const onPress = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Feed Screen</Text>
      <Button title="Go Back to Details" onPress={onPress} />
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({ title: 'Updated!' })}
      />
    </View>
  );
}

function MessageScreen({ navigation }: DetailScreenProps) {
  const onPress = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Message Screen</Text>
      <Button title="Go Back to Details" onPress={onPress} />
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({ title: 'Updated!' })}
      />
    </View>
  );
}

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {      
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
