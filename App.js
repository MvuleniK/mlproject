import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';


// pages 

import SignInScreen from './src/SiginInScreen';


export default function SignInScreen() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name= "SignUp" component={SignUpScreen}/> */}
        <Stack.Screen name= "SignInScreen" component={SignInScreen} options={{title: 'SignIn'}} />
        {/* <Stack.Screen name= "Homepage" component={Homepage}options={{title: 'Homepage'}}  /> */}
        {/* <Stack.Screen name= "Detail" component={Detail}/> */}
        {/* <Stack.Screen name= "SignUp" component={SignUpScreen}/>
        <Stack.Screen name= "SignUp" component={SignUpScreen}/> */}
      </Stack.Navigator>
    </NavigationContainer>



    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>

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