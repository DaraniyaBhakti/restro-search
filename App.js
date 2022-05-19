import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/components/ResultsShowScreen';

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Search'>
        <Stack.Screen name='Restaurant Search' component={SearchScreen} options={{title:"Business Search"}}/>
        <Stack.Screen name="Detail Screen" component={ResultsShowScreen} options={({route}) => ({title:route.params?.name})}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
