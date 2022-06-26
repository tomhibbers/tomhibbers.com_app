import React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  ImageProps,
  Linking,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Avatar, Button, Card, Icon, Layout, Text, useTheme } from '@ui-kitten/components';
import { ThemeContext } from '../theme-context';
import StyleSheet from 'react-native-media-query';
import { SimpleAnimation } from 'react-native-simple-animations';
import AnimatedLinearGradient, { presetColors } from './AnimatedGradient';
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
        speed={4000}></AnimatedLinearGradient>
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
          direction="left"
          distance={wWidth}
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
        </SimpleAnimation>
        <Layout
          style={{
            backgroundColor: 'transparent',
            marginVertical: 40,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
            maxWidth: 800,
            width: '100%',
          }}>
          <SimpleAnimation
            style={{
              width: '40%',
            }}
            delay={500}
            duration={2000}
            direction="left"
            distance={wWidth}
            fade
            movementType="slide"
            useNativeDriver={true}
            animateOnUpdate={true}>
            <Button
              style={styles.button}
              accessoryLeft={EmailIcon}
              onPress={() => {
                Linking.openURL('mailto:tomhibbers@gmail.com');
              }}>
              CONTACT
            </Button>
          </SimpleAnimation>
          <SimpleAnimation
            style={{
              width: '40%',
            }}
            delay={700}
            duration={2000}
            direction="left"
            distance={wWidth}
            fade
            movementType="slide"
            useNativeDriver={true}
            animateOnUpdate={true}>
            <Button
              style={styles.button}
              accessoryLeft={PhoneIcon}
              onPress={() => {
                Linking.openURL('tel:+270822987183');
              }}>
              PHONE
            </Button>
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
    marginVertical: 5,
  },
  button: {
    marginHorizontal: '2.5%',
  },
});
