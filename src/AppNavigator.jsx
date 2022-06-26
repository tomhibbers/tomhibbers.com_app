import React, { ReactElement, useState } from 'react';
import { ImageBackground, Linking, StyleSheet, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
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
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Home } from './Home';
import { About } from './About';
import { ThemeContext } from '../theme-context';
import { Portfolio } from './Portfolio';
import { Contact } from './Contact';
import { Privacy } from './Privacy';
import { Terms } from './Terms';

const { Navigator, Screen } = createDrawerNavigator();

const ForwardIcon = (props) => <Icon {...props} name="arrow-ios-forward" />;
const LinkedInIcon = (props) => <Icon {...props} name="linkedin-outline" />;
const GithubIcon = (props) => <Icon {...props} name="github-outline" />;
const TwitterIcon = (props) => <Icon {...props} name="twitter-outline" />;
const HomeIcon = (props) => <Icon {...props} name="home-outline" />;
const AboutIcon = (props) => <Icon {...props} name="person-outline" />;
const PortfolioIcon = (props) => <Icon {...props} name="briefcase-outline" />;
const ContactIcon = (props) => <Icon {...props} name="email-outline" />;
const WebsiteIcon = (props) => <Icon {...props} name="globe-outline" />;
const PrivacyIcon = (props) => <Icon {...props} name="shield-outline" />;
const TermsIcon = (props) => <Icon {...props} name="info-outline" />;

const renderHeader = () => {
  const themeContext = React.useContext(ThemeContext);
  const theme = useTheme();

  const renderThemeIcon = (props) => (
    <Icon {...props} name={themeContext.isDark ? 'sun' : 'moon'} />
  );

  return (
    <SafeAreaView style={{ backgroundColor: theme['background-basic-color-2'] }}>
      <Layout insets="top" level="2">
        <Layout style={styles.header} level="2">
          <View style={styles.profileContainer}>
            <Avatar size="large" source={require('../assets/favicon.png')} />
            <Text style={styles.profileName} category="h6">
              Tom Hibbers
            </Text>
            <Button
              style={styles.projectlink}
              appearance="ghost"
              accessoryLeft={renderThemeIcon}
              onPress={themeContext.toggleTheme}
            />
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
            accessoryLeft={WebsiteIcon}
            onPress={() => {
              Linking.openURL('https://tomhibbers.com');
            }}
          />
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
          {/* <Button
          style={{ marginVertical: 20, marginHorizontal: 20 }}
          onPress={themeContext.toggleTheme}>
          TOGGLE THEME
        </Button> */}
        </Layout>
      </Layout>
    </SafeAreaView>
  );
};
const renderFooter = () => {
  const themeContext = React.useContext(ThemeContext);
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <Layout insets="top" level="2">
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
          accessoryLeft={PrivacyIcon}
          onPress={() => navigation.navigate('Privacy')}
        />
        <Button
          style={styles.projectlink}
          appearance="ghost"
          accessoryLeft={TermsIcon}
          onPress={() => navigation.navigate('Terms')}
        />
      </Layout>
    </Layout>
  );
};

const DrawerContent = ({ navigation, state }) => (
  <Drawer
    contentOptions={{ activeTintColor: 'red' }}
    header={renderHeader}
    footer={renderFooter}
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
          headerStyle: {
            backgroundColor: theme['background-basic-color-3'],
            borderBottomColor: theme['border-basic-color-5'],
          },
          headerTintColor: theme['text-basic-color'],
          headerTitleAlign: 'center',
          activeTintColor: 'red',
          headerTitle: (props) => (
            <View
              {...props}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Icon
                style={{
                  width: 24,
                  height: 24,
                  tintColor: theme['text-basic-color'],
                  marginHorizontal: 10,
                }}
                name={'home-outline'}
              />
              <Text>Home</Text>
            </View>
          ),
        }}
      />
      <Screen
        name="About"
        component={About}
        options={{
          drawerLabelStyle: { color: 'red' },
          activeTintColor: { color: 'red' },
          headerStyle: {
            backgroundColor: theme['background-basic-color-3'],
            borderBottomColor: theme['border-basic-color-5'],
          },
          headerTintColor: theme['text-basic-color'],
          headerTitleAlign: 'center',
          headerTitle: (props) => (
            <View
              {...props}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Icon
                style={{
                  width: 24,
                  height: 24,
                  tintColor: theme['text-basic-color'],
                  marginHorizontal: 10,
                }}
                name={'person-outline'}
              />
              <Text>About</Text>
            </View>
          ),
        }}
      />
      <Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          headerStyle: {
            backgroundColor: theme['background-basic-color-3'],
            borderBottomColor: theme['border-basic-color-5'],
          },
          headerTintColor: theme['text-basic-color'],
          headerTitleAlign: 'center',
          headerTitle: (props) => (
            <View
              {...props}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Icon
                style={{
                  width: 24,
                  height: 24,
                  tintColor: theme['text-basic-color'],
                  marginHorizontal: 10,
                }}
                name={'briefcase-outline'}
              />
              <Text>Portfolio</Text>
            </View>
          ),
        }}
      />
      <Screen
        name="Contact"
        component={Contact}
        options={{
          headerStyle: {
            backgroundColor: theme['background-basic-color-3'],
            borderBottomColor: theme['border-basic-color-5'],
          },
          headerTintColor: theme['text-basic-color'],
          headerTitleAlign: 'center',
          headerTitle: (props) => (
            <View
              {...props}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Icon
                style={{
                  width: 24,
                  height: 24,
                  tintColor: theme['text-basic-color'],
                  marginHorizontal: 10,
                }}
                name={'email-outline'}
              />
              <Text>Contact</Text>
            </View>
          ),
        }}
      />
      <Screen
        name="Privacy"
        component={Privacy}
        options={{
          headerStyle: {
            backgroundColor: theme['background-basic-color-3'],
            borderBottomColor: theme['border-basic-color-5'],
          },
          headerTintColor: theme['text-basic-color'],
          headerTitleAlign: 'center',
          headerTitle: (props) => (
            <View
              {...props}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Icon
                style={{
                  width: 24,
                  height: 24,
                  tintColor: theme['text-basic-color'],
                  marginHorizontal: 10,
                }}
                name={'shield-outline'}
              />
              <Text>Privacy</Text>
            </View>
          ),
        }}
      />
      <Screen
        name="Terms"
        component={Terms}
        options={{
          headerStyle: {
            backgroundColor: theme['background-basic-color-3'],
            borderBottomColor: theme['border-basic-color-5'],
          },
          headerTintColor: theme['text-basic-color'],
          headerTitleAlign: 'center',
          headerTitle: (props) => (
            <View
              {...props}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Icon
                style={{
                  width: 24,
                  height: 24,
                  tintColor: theme['text-basic-color'],
                  marginHorizontal: 10,
                }}
                name={'info-outline'}
              />
              <Text>Terms</Text>
            </View>
          ),
        }}
      />
    </Navigator>
  );
};
const linking = {
  // prefixes: ['https://mychat.com', 'mychat://'],
  config: {
    screens: {
      Home: '',
      About: '/about',
      Portfolio: '/portfolio',
      Contact: '/contact',
      Privacy: '/privacy',
      Terms: '/terms',
    },
  },
};
export const AppNavigator = () => {
  return (
    <NavigationContainer linking={linking}>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    marginVertical: 10,
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
