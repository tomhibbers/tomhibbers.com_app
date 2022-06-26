import React, { useRef } from 'react';
import {
  Dimensions,
  Easing,
  Image,
  ImageProps,
  Linking,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import { Button, Card, Icon, Layout, Text, useTheme } from '@ui-kitten/components';
import { ThemeContext } from '../theme-context';
import StyleSheet from 'react-native-media-query';
import { SimpleAnimation } from 'react-native-simple-animations';
import { Link } from '@react-navigation/native';
import { Animated } from 'react-native';
import AnimatedLinearGradient, { presetColors } from './AnimatedGradient';
const EmailIcon = (props?: Partial<ImageProps>): React.ReactElement<ImageProps> => (
  <Icon {...props} name="email-outline" />
);
const CVIcon = (props?: Partial<ImageProps>): React.ReactElement<ImageProps> => (
  <Icon {...props} name="attach-outline" />
);
export const Home = ({ navigation }) => {
  // const [animation, setAnimation] = React.useState(new Animated.Value(0));
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
            delay={500}
            duration={2000}
            direction="right"
            distance={wWidth}
            fade
            movementType="slide"
            useNativeDriver={true}
            animateOnUpdate={true}>
            <Layout style={{ alignItems: 'center', backgroundColor: 'transparent' }}>
              <Image
                source={require('../assets/profilepic.jpg')}
                style={{
                  marginVertical: 40,
                  borderColor: theme['color-primary-500'],
                  borderWidth: 3,
                  width: 250,
                  height: 250,
                  resizeMode: 'cover',
                  borderRadius: 400 / 2,
                }}
              />
            </Layout>
          </SimpleAnimation>
          <SimpleAnimation
            delay={500}
            duration={2000}
            direction="left"
            distance={wWidth}
            fade
            movementType="slide"
            useNativeDriver={true}
            animateOnUpdate={true}>
            <Text
              style={[
                styles.text,
                {
                  color: theme['color-success-500'],
                  textShadowColor: 'rgba(0, 0, 0, 0.75)',
                  textShadowOffset: { width: -1, height: 1 },
                  textShadowRadius: 3,
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
                  textShadowColor: 'rgba(0, 0, 0, 0.75)',
                  textShadowOffset: { width: -1, height: 1 },
                  textShadowRadius: 3,
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
                  textShadowColor: 'rgba(0, 0, 0, 0.75)',
                  textShadowOffset: { width: -1, height: 1 },
                  textShadowRadius: 3,
                },
              ]}>
              I'm a software developer with a passion for full stack development. I am currently
              based in South-Africa.
            </Text>
            <Layout
              style={{
                backgroundColor: 'transparent',
                marginVertical: 40,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}>
              <Button
                style={styles.button}
                accessoryLeft={EmailIcon}
                onPress={() => navigation.navigate('Contact')}>
                CONTACT
              </Button>
              <Button
                style={styles.button}
                accessoryLeft={CVIcon}
                onPress={() => {
                  Linking.openURL(
                    'https://drive.google.com/uc?export=download&id=1jDUfZGdLRGIBQV29F9jzof2oeG3NUkiM'
                  );
                }}>
                <Text style={{ width: 200 }}>CV</Text>
              </Button>
            </Layout>
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
  text: {
    textAlign: 'center',
  },
  button: {
    width: '40%',
    marginHorizontal: '5%',
  },
});
