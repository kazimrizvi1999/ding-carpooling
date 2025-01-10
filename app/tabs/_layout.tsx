
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import PostScreen from './posts';
import HomePage from './page';
import SettingsScreen from './Settings';
import { AlertNotificationRoot } from 'react-native-alert-notification';

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
        <AlertNotificationRoot>
    
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'My Posts') {
            iconName = focused ? 'message-square' : 'message-square';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings';
          }

          return (
            <View style={focused?styles.ActivetabItem:styles.tabItem}>
              {/* @ts-ignore */}
              <Icon name={iconName} size={size} color={focused ? 'white' : color} />
              <Text style={[focused && styles.activeTabText,styles.tabText]}>
                {iconName = focused&&route.name}
              </Text>
            </View>
          );
        },
        headerShown: false, // Hide header
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#FAF9F6',
        tabBarStyle: { backgroundColor: '#294167', borderTopWidth: 0,borderRadius:40,marginBottom:10,display:"flex",height:60,justifyContent:"center",alignItems:"center",verticalAlign:"center",paddingVertical:2 },
        tabBarLabel: () => null, // Disable the default label rendering
      })}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="My Posts" component={PostScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
    </AlertNotificationRoot>

  );
}

const styles = StyleSheet.create({
  tabItem: {
    display:"flex",
    flexDirection: 'row',
    paddingHorizontal:0,
    alignItems: 'center',
    justifyContent: 'center',
    width:40,
    marginTop:5,
  },
  ActivetabItem: {
    display:"flex",
    marginTop:20,
    flexDirection: 'row',
    paddingHorizontal:2,
    paddingVertical:4,
    alignItems: 'center',
    backgroundColor:"#436fb5",
    justifyContent: 'center',
    width:100,
    borderRadius:20,
    height:40,
  },
  tabText: {
    fontSize: 12,
    color: 'white',
    marginLeft: 5,
  },
  activeTabText: {
    color: 'white',
  },
});
