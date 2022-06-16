import React from 'react';
// import { AnimationOnScroll } from 'react-animation-on-scroll';
import { View, SafeAreaView, Image, ImageProps, Linking, ScrollView } from 'react-native';
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
const EmailIcon = (props?: Partial<ImageProps>): React.ReactElement<ImageProps> => (
  <Icon {...props} name="email-outline" />
);
const PhoneIcon = (props?: Partial<ImageProps>): React.ReactElement<ImageProps> => (
  <Icon {...props} name="phone-outline" />
);
const Header = () => {
  const theme = useTheme();
  return (
    <View style={{ paddingVertical: 5, backgroundColor: theme['background-basic-color-4'] }}>
      <Text style={{ textAlign: 'center' }} category="h6">
        Want to reach out?
      </Text>
    </View>
  );
};
export const Contact = () => {
  const theme = useTheme();
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme['background-basic-color-1'] }]}>
      <ScrollView style={styles.scrollView}>
        <SimpleAnimation
          delay={500}
          duration={2000}
          direction="left"
          distance={500}
          fade
          movementType="slide"
          useNativeDriver={true}
          animateOnUpdate={true}>
          <Card
            style={[styles.card, { backgroundColor: theme['background-basic-color-2'] }]}
            header={Header}>
            <Text style={styles.text}>
              If you've seen my potential or want to talk to me, don't hesitate to send me a
              message.
            </Text>
          </Card>
          <Button
            style={styles.button}
            accessoryLeft={EmailIcon}
            onPress={() => {
              Linking.openURL('mailto:tomhibbers@gmail.com');
            }}>
            CONTACT
          </Button>
          <Button
            style={styles.button}
            accessoryLeft={PhoneIcon}
            onPress={() => {
              Linking.openURL('tel:+270822987183');
            }}>
            PHONE
          </Button>
        </SimpleAnimation>
      </ScrollView>
    </SafeAreaView>
  );
};

const { ids, styles } = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {},
  card: {
    margin: 20,
    maxWidth: 800,
  },
  text: {
    textAlign: 'center',
    marginVertical: 5,
  },
  button: {
    marginLeft: 10,
    marginRight: 10,
    marginVertical: 16,
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
});
