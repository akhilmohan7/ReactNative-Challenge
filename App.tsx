/**
 * File: App.tsx
 * -----
 * Created Date: Tuesday October 4th 2022
 * Author: Akhil Mohan
 * -----
 * Last Modified: Tue Oct 04 2022
 * Modified By: Akhil Mohan
 * @packageDocumentation
 */

import React from 'react';
import { StatusBar, View } from 'react-native';
import Search from './src/containers/Search';

export default function App() {
  
  return (
    <View>
      <StatusBar 
        barStyle='dark-content'
        backgroundColor='white'
      />
      <Search/>
    </View>
  );
}

