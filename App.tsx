/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

const App = () => {
  return (
    <>
      <View>
        <Button onPress={() => console.log('clicked default button')}>
          click works (but only on text)
        </Button>
      </View>
      <View>
        <Button mode="contained" onPress={() => console.log('clicked crash button')}>
          click to crash
        </Button>
      </View>
    </>
  );
};

export default App;
