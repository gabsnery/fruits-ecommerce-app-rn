import React from 'react'
import {StatusBar,SafeAreaView } from 'react-native';
import Home from './src/pages/home/index'

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>
      <Home/>
    </SafeAreaView>
  );
}
