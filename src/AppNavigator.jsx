import React, { ReactElement, useState } from 'react';
import { ImageBackground, Linking, StyleSheet, View } from 'react-native';
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

const ForwardIcon = (props) => <Icon {...props} name="arrow-ios-forward" />;
const LinkedInIcon = (props) => <Icon {...props} name="linkedin-outline" />;
const GithubIcon = (props) => <Icon {...props} name="github-outline" />;
const TwitterIcon = (props) => <Icon {...props} name="twitter-outline" />;
const HomeIcon = (props) => <Icon {...props} name="twitter-outline" />;
const AboutIcon = (props) => <Icon {...props} name="person-outline" />;
const PortfolioIcon = (props) => <Icon {...props} name="briefcase-outline" />;
const ContactIcon = (props) => <Icon {...props} name="email-outline" />;

const renderHeader = () => {
  const themeContext = React.useContext(ThemeContext);
  const theme = useTheme();
  return (
    <Layout insets="top" level="2">
      <Layout style={styles.header} level="2">
        <View style={styles.profileContainer}>
          <Avatar size="large" source={require('../assets/favicon-2.png')} />
          <Text style={styles.profileName} category="h6">
            Tom Hibbers
          </Text>
        </View>
      </Layout>
      <Layout
        style={{
          backgroundColor: theme['background-basic-color-2'],
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button
          style={styles.projectlink}
          appearance="ghost"
          accessoryLeft={GithubIcon}
          onPress={() => {
            Linking.openURL('https://github.com/tomhibbers');
          }}
        />
        <Button
          style={styles.projectlink}
          appearance="ghost"
          accessoryLeft={LinkedInIcon}
          onPress={() => {
            Linking.openURL('https://www.linkedin.com/in/tom-hibbers/');
          }}
        />
        <Button
          style={styles.projectlink}
          appearance="ghost"
          accessoryLeft={TwitterIcon}
          onPress={() => {
            Linking.openURL('https://twitter.com/tomhibbers');
          }}
        />
      </Layout>
      <Layout>
        <Button
          style={{ marginVertical: 20, marginHorizontal: 20 }}
          onPress={themeContext.toggleTheme}>
          TOGGLE THEME
        </Button>
      </Layout>
    </Layout>
  );
};

const DrawerContent = ({ navigation, state }) => (
  <Drawer
    contentOptions={{ activeTintColor: 'red' }}
    header={renderHeader}
    selectedIndex={new IndexPath(state.index)}
    onSelect={(index) => navigation.navigate(state.routeNames[index.row])}>
    <DrawerItem title="Home" accessoryLeft={HomeIcon} accessoryRight={ForwardIcon} />
    <DrawerItem
      title="About"
      activeTintColor="red"
      accessoryLeft={AboutIcon}
      accessoryRight={ForwardIcon}
    />
    <DrawerItem title="Portfolio" accessoryLeft={PortfolioIcon} accessoryRight={ForwardIcon} />
    <DrawerItem title="Contact" accessoryLeft={ContactIcon} accessoryRight={ForwardIcon} />
  </Drawer>
);
export const DrawerNavigator = () => {
  const theme = useTheme();
  return (
    <Navigator
      drawerLabelStyle={{ activeTintColor: 'red' }}
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: { backgroundColor: theme['background-basic-color-3'], borderBottomWidth: 0 },
          headerTintColor: theme['text-basic-color'],
          headerTitleAlign: 'center',
          activeTintColor: 'red',
        }}
      />
      <Screen
        name="About"
        component={About}
        options={{
          drawerLabelStyle: { color: 'red' },
          activeTintColor: { color: 'red' },
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
    height: 128,
    justifyContent: 'center',
    alignItems: 'center',
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
