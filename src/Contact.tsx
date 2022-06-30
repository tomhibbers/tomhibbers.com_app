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
const EmailIcon = (props: any) => <Icon {...props} name="mail" pack="feather" />;
const PhoneIcon = (props: any) => <Icon {...props} name="phone" pack="feather" />;
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
          direction="left"
          distance={wWidth}
          fade
          movementType="slide"
          useNativeDriver={true}
          animateOnUpdate={true}>
          <Card
            style={[styles.card, { backgroundColor: theme['background-basic-color-2'] }]}
            header={Header}
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
                    accessoryLeft={EmailIcon}
                    appearance="ghost"
                    onPress={() => {
                      Linking.openURL('mailto:tomhibbers@gmail.com');
                    }}>
                    CONTACT
                  </Button>
                  <Button
                    style={styles.button}
                    accessoryLeft={PhoneIcon}
                    appearance="ghost"
                    onPress={() => {
                      Linking.openURL('tel:+270822987183');
                    }}>
                    PHONE
                  </Button>
                </View>
              );
            }}>
            <Text style={styles.text}>
              If you've seen my potential or want to talk to me, don't hesitate to send me a
              message.
            </Text>
          </Card>
        </SimpleAnimation>
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
    padding: 16,
  },
  button: {
    marginHorizontal: '2.5%',
  },
  projectlink: {
    padding: 0,
    margin: 0,
  },
});
