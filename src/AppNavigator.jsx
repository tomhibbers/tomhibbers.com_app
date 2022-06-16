import React, { ReactElement, useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  Drawer,
  DrawerItem,
  Layout,
  Text,
  IndexPath,
  useTheme,
  Divider,
  Icon,
  Button,
  Toggle,
  Avatar,
} from '@ui-kitten/components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Home } from './Home';
import { About } from './About';
import { ThemeContext } from '../theme-context';
import { Portfolio } from './Portfolio';
import { Contact } from './Contact';

const { Navigator, Screen } = createDrawerNavigator();

const PersonIcon = (props) => <Icon {...props} name="person-outline" />;

const BellIcon = (props) => <Icon {...props} name="bell-outline" />;

const ForwardIcon = (props) => <Icon {...props} name="arrow-ios-forward" />;

const renderHeader = () => {
  const themeContext = React.useContext(ThemeContext);
  return (
    <Layout insets="top" level="2">
      <Layout style={styles.header} level="2">
        <View style={styles.profileContainer}>
          <Avatar size="giant" source={require('../assets/icon.png')} />
          <Text style={styles.profileName} category="h6">
            Tom Hibbers
          </Text>
        </View>
        <Button style={{ marginVertical: 4 }} onPress={themeContext.toggleTheme}>
          TOGGLE THEME
        </Button>
      </Layout>
    </Layout>
  );
};

const DrawerContent = ({ navigation, state }) => (
  <Drawer
    header={renderHeader}
    selectedIndex={new IndexPath(state.index)}
    onSelect={(index) => navigation.navigate(state.routeNames[index.row])}>
    <DrawerItem title="Home" accessoryLeft={PersonIcon} accessoryRight={ForwardIcon} />
    <DrawerItem title="About" accessoryLeft={BellIcon} accessoryRight={ForwardIcon} />
    <DrawerItem title="Portfolio" accessoryLeft={BellIcon} accessoryRight={ForwardIcon} />
    <DrawerItem title="Contact" accessoryLeft={BellIcon} accessoryRight={ForwardIcon} />
  </Drawer>
);
export const DrawerNavigator = () => {
  const theme = useTheme();
  return (
    <Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: { backgroundColor: theme['background-basic-color-3'], borderBottomWidth: 0 },
          headerTintColor: theme['text-basic-color'],
          headerTitleAlign: 'center',
        }}
      />
      <Screen
        name="About"
        component={About}
        options={{
          headerStyle: { backgroundColor: theme['background-basic-color-3'], borderBottomWidth: 0 },
          headerTintColor: theme['text-basic-color'],
          headerTitleAlign: 'center',
        }}
      />
      <Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          headerStyle: { backgroundColor: theme['background-basic-color-3'], borderBottomWidth: 0 },
          headerTintColor: theme['text-basic-color'],
          headerTitleAlign: 'center',
        }}
      />
      <Screen
        name="Contact"
        component={Contact}
        options={{
          headerStyle: { backgroundColor: theme['background-basic-color-3'], borderBottomWidth: 0 },
          headerTintColor: theme['text-basic-color'],
          headerTitleAlign: 'center',
        }}
      />
    </Navigator>
  );
};

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    marginTop: 20,
    height: 128,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 16,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    marginHorizontal: 16,
  },
});
