

import * as React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/screens/HomeScreen";
import Setting from "./src/screens/Setting"

//const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={{ title: 'Welcome' }}
    //     />
    //     </Stack.Navigator>
    //   {/* <HomeScreen/> */}
    // </NavigationContainer>
     <HomeScreen/> 
  );
};

export default App;
