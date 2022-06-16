import React from 'react';
// import { AnimationOnScroll } from 'react-animation-on-scroll';
import { View, SafeAreaView, Image } from 'react-native';
// import Animated, {
//   FadeOutDown,
//   FadeInUp,
//   Layout as LayoutAnimated,
//   Easing,
// } from 'react-native-reanimated';
import { Avatar, Button, Layout, Text, useTheme } from '@ui-kitten/components';
import { ThemeContext } from '../theme-context';
import StyleSheet from 'react-native-media-query';
// import * as Animatable from 'react-native-animatable';
import { SimpleAnimation } from 'react-native-simple-animations';
export const About = () => {
  const theme = useTheme();
  return (
    <Layout style={styles.container} dataSet={{ media: ids.container }}>
      <Layout style={styles.button} dataSet={{ media: ids.button }}>
        <Button>test</Button>
      </Layout>
      <SimpleAnimation
        delay={500}
        duration={2000}
        direction="left"
        distance={500}
        fade
        movementType="slide"
        useNativeDriver={true}
        animateOnUpdate={true}>
        <Layout style={styles.button} dataSet={{ media: ids.button }}>
          <Image
            source={require('../assets/profilepic.jpg')}
            style={{ width: 400, height: 400, borderRadius: 400 / 2 }}
          />
        </Layout>
      </SimpleAnimation>
    </Layout>
  );
};

const { ids, styles } = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    height: '100%',
    '@media (max-width: 800px)': {
      justifyContent: 'flex-start',
      flexDirection: 'column',
    },
  },
  button: {
    width: '50%',
    '@media (max-width: 800px)': {
      width: '100%',
    },
  },
});
