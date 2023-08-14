
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import type { PropsWithChildren } from 'react';
// import { Navigator } from './src/navigator/Navigator';
import { Tabs } from './src/navigator/bottomTab/Tabs';


const App = (): JSX.Element => {

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

export default App;
