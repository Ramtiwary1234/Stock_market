import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LibraryDetailScreen from './components/LibraryDetailScreen';
import LibraryListScreen from './components/LibraryListScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={LibraryDetailScreen} />
        <Stack.Screen name="Details" component={LibraryListScreen} />

      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default App
