import {TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MeetScreen from '../screens/meetScreen';
import HomeScreen from '../screens/homeScreen';
import { styleApp } from '../components/style';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'メール') {
              iconName = 'mail';
            } else if (route.name === 'Meet') {
              iconName = 'videocam';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            display: 'flex',
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="メール" component={HomeScreen} />
        <Tab.Screen name="Meet" component={MeetScreen} />
      </Tab.Navigator>
      <TouchableOpacity style={styleApp.iconPen}>
          <Icon name="edit" size={24} color="tomato" />
        </TouchableOpacity>
    </NavigationContainer>
  );
}


export default App;