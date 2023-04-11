import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import {store}  from "./store";
import HomeSreen from "./screens/HomeScreen";
import {SafeAreaProvider} from 'react-native-safe-area-context';
// set up redux


export default function App() {
  return (
    <Provider store={store}>
    <SafeAreaProvider>
    <HomeSreen />
    </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
