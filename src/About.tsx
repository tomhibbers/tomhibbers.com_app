import React from 'react';
import { View, SafeAreaView, Image, ScrollView, Dimensions, Animated } from 'react-native';
import { Avatar, Button, Card, Layout, Text, useTheme } from '@ui-kitten/components';
import { ThemeContext } from '../theme-context';
import StyleSheet from 'react-native-media-query';
import { SimpleAnimation } from 'react-native-simple-animations';
import AnimatedLinearGradient, { presetColors } from './AnimatedGradient';
const Header = () => {
  const theme = useTheme();
  return (
    <View style={{ paddingVertical: 5, backgroundColor: theme['background-basic-color-4'] }}>
      <Text style={{ textAlign: 'center' }} category="h6">
        Who am I?
      </Text>
    </View>
  );
};
export const About = () => {
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
        }}>
        <SimpleAnimation
          delay={500}
          duration={2000}
          direction="right"
          distance={wWidth}
          fade
          movementType="slide"
          useNativeDriver={true}
          animateOnUpdate={true}>
          <Card
            style={[styles.card, { backgroundColor: theme['background-basic-color-2'] }]}
            header={Header}>
            <Text style={styles.text}>
              My name is Tom Hibbers, I am a software engineer with a great passion for programming.
              I am passionate about building solutions that add value to people's lives and at the
              same time challenging myself.
            </Text>
            <Text style={styles.text}>
              I develop full stack solutions using Angular, React, .NET and Java. I have experience
              in the FinTech and ERP spaces. I love improving myself with each project I get my
              hands on. I develop full stack solutions using Angular, React, .NET and Java. I have
              experience in the FinTech and ERP spaces.
            </Text>
            <Text style={styles.text}>I am hardworking and passionate about what I do.</Text>
            <Text style={styles.text} appearance="hint">
              Here are my main skills:
            </Text>
          </Card>
        </SimpleAnimation>
        <Layout style={[styles.containerRow, { backgroundColor: 'transparent' }]}>
          <SimpleAnimation
            delay={200}
            duration={2000}
            direction="left"
            distance={wWidth}
            fade
            movementType="slide"
            useNativeDriver={true}
            animateOnUpdate={true}>
            <Avatar style={styles.avatar} source={require('../assets/angular-icon.png')} />
          </SimpleAnimation>
          <SimpleAnimation
            delay={400}
            duration={2000}
            direction="left"
            distance={wWidth}
            fade
            movementType="slide"
            useNativeDriver={true}
            animateOnUpdate={true}>
            <Avatar style={styles.avatar} source={require('../assets/react-icon.png')} />
          </SimpleAnimation>
          <SimpleAnimation
            delay={600}
            duration={2000}
            direction="left"
            distance={wWidth}
            fade
            movementType="slide"
            useNativeDriver={true}
            animateOnUpdate={true}>
            <Avatar style={styles.avatar} source={require('../assets/js-icon.png')} />
          </SimpleAnimation>
          <SimpleAnimation
            delay={800}
            duration={2000}
            direction="left"
            distance={wWidth}
            fade
            movementType="slide"
            useNativeDriver={true}
            animateOnUpdate={true}>
            <Avatar style={styles.avatar} source={require('../assets/typescript-icon.png')} />
          </SimpleAnimation>
        </Layout>
        <Layout style={[styles.containerRow, { backgroundColor: 'transparent' }]}>
          <SimpleAnimation
            delay={1000}
            duration={2000}
            direction="left"
            distance={wWidth}
            fade
            movementType="slide"
            useNativeDriver={true}
            animateOnUpdate={true}>
            <Avatar style={styles.avatar} source={require('../assets/csharp-icon.png')} />
          </SimpleAnimation>
          <SimpleAnimation
            delay={1200}
            duration={2000}
            direction="left"
            distance={wWidth}
            fade
            movementType="slide"
            useNativeDriver={true}
            animateOnUpdate={true}>
            <Avatar style={styles.avatar} source={require('../assets/dotnet-icon.png')} />
          </SimpleAnimation>
          <SimpleAnimation
            delay={1400}
            duration={2000}
            direction="left"
            distance={wWidth}
            fade
            movementType="slide"
            useNativeDriver={true}
            animateOnUpdate={true}>
            <Avatar style={styles.avatar} source={require('../assets/java-icon.png')} />
          </SimpleAnimation>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};

const { ids, styles } = StyleSheet.create({
  card: {
    margin: 20,
    maxWidth: 800,
    opacity: 0.7,
  },
  text: {
    textAlign: 'center',
    padding:16,
  },
  button: {
    marginLeft: 10,
    marginRight: 10,
    marginVertical: 16,
  },
  containerRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  avatar: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
