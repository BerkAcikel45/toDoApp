import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const RootTab = createBottomTabNavigator();

import HomeScreen from '../screens/HomeScreen';
import ActiveScreen from '../screens/ActiveScreen';
import CompletedScreen from  '../screens/CompletedScreen';



const RootTabScreen = ({navigation}) => (
    <RootTab.Navigator headerMode='none'

    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'All') {
            iconName = focused ? 'list': 'list-outline';
          } else if (route.name === 'Active') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          }
          else if(route.name === 'Completed'){
            iconName = focused ? 'checkmark-circle' : 'checkmark-circle-outline';

          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    
    >
        <RootTab.Screen name="All" component={HomeScreen}/>
        <RootTab.Screen name="Active" component={ActiveScreen}/>
        <RootTab.Screen name="Completed" component={CompletedScreen}/>
    </RootTab.Navigator>
);

export default RootTabScreen;