import React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Linking,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Avatar, Button, Card, Icon, Layout, Text, useTheme } from '@ui-kitten/components';
import { ThemeContext } from '../theme-context';
import StyleSheet from 'react-native-media-query';
import { SimpleAnimation } from 'react-native-simple-animations';
import AnimatedLinearGradient, { presetColors } from './AnimatedGradient';
import { FontAwesome5 } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons';

const GithubIcon = (props: any) => <Icon {...props} name="github" pack="feather" />;
const ExternalLinkIcon = (props: any) => <Icon {...props} name="external-link" pack="feather" />;
const ProjectIcon = (props: any) => <Icon {...props} name="activity" pack="feather" />;
const AngularIcon = (props: any) => <Icon {...props} name="angular" pack="fontawesome" />;
const ReactIcon = (props: any) => <Icon {...props} name="react" pack="fontawesome" />;
const ScullyIcon = (props: any) => <Icon {...props} name="scully" pack="assets" />;
const JSIcon = (props: any) => <Icon {...props} name="js-square" pack="fontawesome" />;
const TSIcon = (props: any) => <Icon {...props} name="language-typescript" pack="fontawesome" />;
const TechDefaultIcon = (props: any) => <Icon {...props} name="package" pack="feather" />;
export const Portfolio = () => {
  const theme = useTheme();
  const wWidth = Dimensions.get('window').width;
  return (
    <SafeAreaView style={{ flexGrow: 1, backgroundColor: theme['background-basic-color-1'] }}>
      <AnimatedLinearGradient
        customColors={[
          theme['background-basic-color-1'],
          theme['color-primary-500'],
          theme['color-info-500'],
          theme['background-basic-color-4'],
        ]}
        speed={2000}
      />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          marginVertical: 50,
        }}>
        <SimpleAnimation
          style={{ padding: 10, textAlign: 'center' }}
          delay={200}
          duration={2000}
          direction="right"
          distance={wWidth}
          fade
          movementType="slide"
          useNativeDriver={true}
          animateOnUpdate={true}>
          <Card
            style={[styles.card, { backgroundColor: theme['background-basic-color-2'] }]}
            header={() => {
              const theme = useTheme();
              return (
                <Layout>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      backgroundColor: theme['background-basic-color-4'],
                    }}>
                    <Button appearance="ghost" accessoryLeft={ProjectIcon} />
                    <Layout
                      style={{
                        flexDirection: 'row',
                        backgroundColor: 'transparent',
                      }}>
                      <Button
                        style={styles.projectlink}
                        onPress={() => {
                          Linking.openURL('https://github.com/tomhibbers/tomhibbers.com_v1');
                        }}
                        appearance="ghost"
                        accessoryLeft={GithubIcon}
                      />
                    </Layout>
                  </View>
                  <Layout
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: theme['background-basic-color-4'],
                    }}>
                    <Text
                      category="h6"
                      style={{
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                      }}>
                      Tom Hibbers Website V1
                    </Text>
                  </Layout>
                </Layout>
              );
            }}
            footer={() => {
              const theme = useTheme();
              return (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    backgroundColor: theme['background-basic-color-4'],
                  }}>
                  <Button
                    style={styles.projectlink}
                    onPress={() => {
                      Linking.openURL('https://angular.io');
                    }}
                    appearance="ghost"
                    accessoryLeft={AngularIcon}>
                    Angular
                  </Button>
                  <Button
                    style={styles.projectlink}
                    onPress={() => {
                      Linking.openURL('https://www.typescriptlang.org');
                    }}
                    appearance="ghost"
                    accessoryLeft={TechDefaultIcon}>
                    Typescript
                  </Button>
                  <Button
                    style={styles.projectlink}
                    onPress={() => {
                      Linking.openURL('https://scully.io');
                    }}
                    appearance="ghost"
                    accessoryLeft={TechDefaultIcon}>
                    Scully
                  </Button>
                </View>
              );
            }}>
            <Text style={styles.text}>
              My first personal website. Written in Angular and Scully. My first foray into
              Jamstack. Lots to learn and lots of fun.
            </Text>
          </Card>
        </SimpleAnimation>
        <SimpleAnimation
          style={{ padding: 10 }}
          delay={400}
          duration={2000}
          direction="right"
          distance={wWidth}
          fade
          movementType="slide"
          useNativeDriver={true}
          animateOnUpdate={true}>
          <Card
            style={[styles.card, { backgroundColor: theme['background-basic-color-2'] }]}
            header={() => {
              const theme = useTheme();
              return (
                <Layout>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      backgroundColor: theme['background-basic-color-4'],
                    }}>
                    <Button appearance="ghost" accessoryLeft={ProjectIcon} />
                    <Layout
                      style={{
                        flexDirection: 'row',
                        backgroundColor: 'transparent',
                      }}>
                      <Button
                        style={styles.projectlink}
                        appearance="ghost"
                        accessoryLeft={GithubIcon}
                        onPress={() => {
                          Linking.openURL('https://github.com/tomhibbers/tomhibbers.com_v2');
                        }}
                      />
                      <Button
                        style={styles.projectlink}
                        appearance="ghost"
                        accessoryLeft={ExternalLinkIcon}
                        onPress={() => {
                          Linking.openURL('https://tomhibbers.com');
                        }}
                      />
                    </Layout>
                  </View>
                  <Layout
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: theme['background-basic-color-4'],
                    }}>
                    <Text
                      category="h6"
                      style={{
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                      }}>
                      Tom Hibbers Website V2
                    </Text>
                  </Layout>
                </Layout>
              );
            }}
            footer={() => {
              const theme = useTheme();
              return (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    backgroundColor: theme['background-basic-color-4'],
                  }}>
                  <Button
                    style={styles.projectlink}
                    onPress={() => {
                      Linking.openURL('https://reactjs.org');
                    }}
                    appearance="ghost"
                    accessoryLeft={ReactIcon}>
                    React
                  </Button>
                  <Button
                    style={styles.projectlink}
                    onPress={() => {
                      Linking.openURL('https://www.typescriptlang.org');
                    }}
                    appearance="ghost"
                    accessoryLeft={TechDefaultIcon}>
                    Typescript
                  </Button>
                  <Button
                    style={styles.projectlink}
                    onPress={() => {
                      Linking.openURL('https://styled-components.com');
                    }}
                    appearance="ghost"
                    accessoryLeft={TechDefaultIcon}>
                    Styled Components
                  </Button>
                </View>
              );
            }}>
            <Text style={styles.text}>
              My personal website, rewritten in ReactJS. I'm moving away from Jamstack for this
              project as adding embedded widgets from social media feeds doesn't work with Scully.
            </Text>
          </Card>
        </SimpleAnimation>
        <SimpleAnimation
          style={{ padding: 10, marginBottom: 100 }}
          delay={600}
          duration={2000}
          direction="right"
          distance={wWidth}
          fade
          movementType="slide"
          useNativeDriver={true}
          animateOnUpdate={true}>
          <Card
            style={[styles.card, { backgroundColor: theme['background-basic-color-2'] }]}
            header={() => {
              const theme = useTheme();
              return (
                <Layout>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      backgroundColor: theme['background-basic-color-4'],
                    }}>
                    <Button appearance="ghost" accessoryLeft={ProjectIcon} />
                    <Layout
                      style={{
                        flexDirection: 'row',
                        backgroundColor: 'transparent',
                      }}>
                      <Button
                        style={styles.projectlink}
                        appearance="ghost"
                        accessoryLeft={GithubIcon}
                        onPress={() => {
                          Linking.openURL('https://github.com/tomhibbers/tomhibbers.com_app');
                        }}
                      />
                      <Button
                        style={styles.projectlink}
                        appearance="ghost"
                        accessoryLeft={ExternalLinkIcon}
                        onPress={() => {
                          Linking.openURL('https://app.tomhibbers.com');
                        }}
                      />
                    </Layout>
                  </View>
                  <Layout
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: theme['background-basic-color-4'],
                    }}>
                    <Text
                      category="h6"
                      style={{
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                      }}>
                      Tom Hibbers Mobile App
                    </Text>
                  </Layout>
                </Layout>
              );
            }}
            footer={() => {
              const theme = useTheme();
              return (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    backgroundColor: theme['background-basic-color-4'],
                  }}>
                  <Button
                    style={styles.projectlink}
                    onPress={() => {
                      Linking.openURL('https://expo.dev');
                    }}
                    appearance="ghost"
                    accessoryLeft={TechDefaultIcon}>
                    Expo
                  </Button>
                  <Button
                    style={styles.projectlink}
                    onPress={() => {
                      Linking.openURL('https://reactnative.dev');
                    }}
                    appearance="ghost"
                    accessoryLeft={ReactIcon}>
                    React Native
                  </Button>
                  <Button
                    style={styles.projectlink}
                    onPress={() => {
                      Linking.openURL('https://www.typescriptlang.org');
                    }}
                    appearance="ghost"
                    accessoryLeft={TechDefaultIcon}>
                    Typescript
                  </Button>
                  <Button
                    style={styles.projectlink}
                    onPress={() => {
                      Linking.openURL('https://akveo.github.io/react-native-ui-kitten/');
                    }}
                    appearance="ghost"
                    accessoryLeft={TechDefaultIcon}>
                    UI Kitten
                  </Button>
                </View>
              );
            }}>
            <Text style={styles.text}>
              The official app for tomhibbers.com. Bootstrapped with Expo, developed using React
              Native and the UI Kitten framework. The app is currently published on the android app
              store. Follow the link for the web version of the app.
            </Text>
          </Card>
        </SimpleAnimation>
      </ScrollView>
    </SafeAreaView>
  );
};

const { ids, styles } = StyleSheet.create({
  card: {
    margin: 0,
    padding: 0,
    maxWidth: 800,
    opacity: 0.7,
  },
  text: {
    textAlign: 'center',
    padding:16,
  },
  projectlink: {
    padding: 0,
    margin: 0,
  },
  containerRow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  avatar: {
    marginHorizontal: 5,
  },
  tech: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  icon: {
    width: 32,
    height: 32,
  },
});
