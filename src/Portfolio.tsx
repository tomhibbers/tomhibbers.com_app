import React from 'react';
// import { AnimationOnScroll } from 'react-animation-on-scroll';
import { View, SafeAreaView, Image, Linking, ScrollView, Dimensions } from 'react-native';
// import Animated, {
//   FadeOutDown,
//   FadeInUp,
//   Layout as LayoutAnimated,
//   Easing,
// } from 'react-native-reanimated';
import { Avatar, Button, Card, Icon, Layout, Text, useTheme } from '@ui-kitten/components';
import { ThemeContext } from '../theme-context';
import StyleSheet from 'react-native-media-query';
// import * as Animatable from 'react-native-animatable';
import { SimpleAnimation } from 'react-native-simple-animations';
import AnimatedLinearGradient, { presetColors } from './AnimatedGradient';

const GithubIcon = (props: any) => <Icon {...props} name="github-outline" />;
const ExternalLinkIcon = (props: any) => <Icon {...props} name="external-link-outline" />;
export const Portfolio = () => {
  const theme = useTheme();
  const wWidth = Dimensions.get('window').width;
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme['background-basic-color-1'] }]}>
      <AnimatedLinearGradient
        customColors={[
          theme['background-basic-color-1'],
          theme['color-primary-500'],
          theme['color-info-500'],
          theme['background-basic-color-4'],
        ]}
        speed={4000}>
        <ScrollView
          contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
          style={styles.scrollView}>
          <SimpleAnimation
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
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      backgroundColor: theme['background-basic-color-4'],
                    }}>
                    <Text
                      category="h6"
                      style={{
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                      }}>
                      TomHibbers.com V1
                    </Text>
                    <Layout
                      style={{
                        flexDirection: 'row',
                        backgroundColor: theme['background-basic-color-4'],
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
                );
              }}
              footer={() => {
                const theme = useTheme();
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      backgroundColor: theme['background-basic-color-4'],
                    }}>
                    <Text style={styles.tech}>Angular</Text>
                    <Text style={styles.tech}>Typescript</Text>
                    <Text style={styles.tech}>Scully</Text>
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
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      backgroundColor: theme['background-basic-color-4'],
                    }}>
                    <Text
                      category="h6"
                      style={{
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                      }}>
                      TomHibbers.com V2
                    </Text>
                    <Layout
                      style={{
                        flexDirection: 'row',
                        backgroundColor: theme['background-basic-color-4'],
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
                    <Text style={styles.tech}>React</Text>
                    <Text style={styles.tech}>Typescript</Text>
                    <Text style={styles.tech}>Styled Components</Text>
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
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
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
                    <Layout
                      style={{
                        flexDirection: 'row',
                        backgroundColor: theme['background-basic-color-4'],
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
                    <Text style={styles.tech}>React Native</Text>
                    <Text style={styles.tech}>Typescript</Text>
                    <Text style={styles.tech}>UI Kitten</Text>
                  </View>
                );
              }}>
              <Text style={styles.text}>
                The official app for tomhibbers.com. Written with React Native and UI Kitten.
                Currently published on the android app store.
              </Text>
            </Card>
          </SimpleAnimation>
        </ScrollView>
      </AnimatedLinearGradient>
    </SafeAreaView>
  );
};

const { ids, styles } = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    width: '100%',
  },
  card: {
    margin: 20,
    maxWidth: 800,
    opacity: 0.7,
  },
  text: {
    textAlign: 'center',
    marginVertical: 5,
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
});
