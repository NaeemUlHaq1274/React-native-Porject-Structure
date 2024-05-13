import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

interface DrawerProps {
  navigation: any;
}

const DrawerContent: React.FC<DrawerProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView>
        {/* Your custom content goes here */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Custom Drawer Header</Text>
        </View>
        <DrawerItemList state={navigation.state} navigation={navigation} descriptors={{}} />
        <DrawerItem
          label="Custom Screen"
          onPress={() => navigation.navigate('CustomScreen')}
        />
      </DrawerContentScrollView>
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => {
          // Implement your logout logic here
        }}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  logoutButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  logoutButtonText: {
    fontSize: 16,
    color: 'red',
  },
});

export default DrawerContent;
