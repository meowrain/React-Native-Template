import * as React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@/screens/HomeScreen';
import DetailsScreen from '@/screens/DetailsScreen';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{title:'Home'}}/>
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{title: 'Detail'}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}
 
export default function Home() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}


AppRegistry.registerComponent(appName, () => Home);