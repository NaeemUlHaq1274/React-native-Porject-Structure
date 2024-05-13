import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DrawerContent from './DrawerContent';
import { HomeScreen, SubscriptionScreen } from '@screens';

const Drawer = createDrawerNavigator();

const DrawerNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="HOME_SCREEN" component={HomeScreen} />
        <Drawer.Screen name="SETTING_SCREEN" component={SubscriptionScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;
