import React, { useRef } from 'react';
import {
  Dimensions,
  Easing,
  Image,
  ImageBackground,
  ImageProps,
  Linking,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button, Card, Icon, Layout, Text, useTheme } from '@ui-kitten/components';
import { ThemeContext } from '../theme-context';
import StyleSheet from 'react-native-media-query';
import { SimpleAnimation } from 'react-native-simple-animations';
import { Link } from '@react-navigation/native';
import { Animated } from 'react-native';
import AnimatedLinearGradient, { presetColors } from './AnimatedGradient';
const EmailIcon = (props: any) => <Icon {...props} name="mail" pack="feather" />;
const CVIcon = (props: any) => <Icon {...props} name="download" pack="feather" />;
export const Home = ({ navigation }) => {
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
        speed={2000}></AnimatedLinearGradient>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'transparent',
          marginHorizontal: 10,
        }}>
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
            style={[
              styles.card,
              {
                marginVertical: 10,
                backgroundColor: theme['background-basic-color-2'],
              },
            ]}
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
                    accessoryLeft={EmailIcon}>
                    Contact
                  </Button>
                  <Button
                    style={styles.projectlink}
                    onPress={() => {
                      Linking.openURL('https://www.typescriptlang.org');
                    }}
                    appearance="ghost"
                    accessoryLeft={CVIcon}>
                    CV
                  </Button>
                </View>
              );
            }}>
            <View
              style={{
                // flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}>
              <View
                style={{
                  flex: 0.3,
                  flexBasis: 250,
                  flexGrow: 2,
                  backgroundColor: 'transparent',
                }}>
                <Image
                  source={require('../assets/profilepic2.png')}
                  style={{
                    width: '100%',
                    height: 250,
                    resizeMode: 'cover',
                  }}
                />
              </View>
              <View
                style={{
                  flex: 0.7,
                  flexBasis: 300,
                  alignItems: 'center',
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                }}>
                <Text
                  style={[
                    styles.text,
                    {
                      color: theme['color-success-500'],
                    },
                  ]}
                  category="h1">
                  Tom Hibbers
                </Text>
                <Text
                  style={[
                    styles.text,
                    {
                      color: theme['color-success-400'],
                    },
                  ]}
                  category="h6">
                  Full stack developer
                </Text>
                <Text
                  style={[
                    styles.text,
                    {
                      marginVertical: 20,
                    },
                  ]}>
                  I'm a software developer with a passion for full stack development. I am currently
                  based in South-Africa.
                </Text>

                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL(
                      'https://play.google.com/store/apps/details?id=com.tomhibbers.app'
                    );
                  }}>
                  <Image
                    style={{ height: 40, width: 133 }}
                    source={require('../assets/google-play-badge.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </Card>
        </SimpleAnimation>
      </ScrollView>
    </SafeAreaView>
  );
};
const { ids, styles } = StyleSheet.create({
  card: {
    maxWidth: 800,
    opacity: 0.7,
  },
  text: {
    textAlign: 'center',
  },
  button: {
    width: '40%',
    marginHorizontal: '5%',
  },
  heroLeftContainer: {
    backgroundColor: 'transparent',
    marginHorizontal: 10,
  },
  heroRightContainer: {
    backgroundColor: 'transparent',
    maxWidth: 500,
    width: '70%',
    marginHorizontal: 10,
    // '@media (max-width: 960px)': {
    //   width: '70%',
    //   //maxWidth: 'initial',
    // },
    '@media (max-width: 800px)': {
      width: '90%',
      //maxWidth: 'initial',
    },
  },
  projectlink: {
    padding: 0,
    margin: 0,
  },
});
