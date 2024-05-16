import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DrawerContent from './DrawerContent';
import { HomeScreen, SubscriptionScreen } from '@screens';
import { SCREEN_NAMES } from '@constants';

const Drawer = createDrawerNavigator();

const DrawerNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name={SCREEN_NAMES.HOME_SCREEN} component={HomeScreen} />
        <Drawer.Screen name={SCREEN_NAMES.SUBSCRIPTION_SCREEN} component={SubscriptionScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;
