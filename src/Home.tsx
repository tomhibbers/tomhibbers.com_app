import React from 'react';
import { Image, ImageProps, Linking, SafeAreaView, ScrollView, View } from 'react-native';
import { Button, Card, Icon, Layout, Text, useTheme } from '@ui-kitten/components';
import { ThemeContext } from '../theme-context';
import StyleSheet from 'react-native-media-query';
import { SimpleAnimation } from 'react-native-simple-animations';
import { Link } from '@react-navigation/native';
const EmailIcon = (props?: Partial<ImageProps>): React.ReactElement<ImageProps> => (
  <Icon {...props} name="email-outline" />
);
const CVIcon = (props?: Partial<ImageProps>): React.ReactElement<ImageProps> => (
  <Icon {...props} name="attach-outline" />
);
export const Home = ({ navigation }) => {
  const theme = useTheme();
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme['background-basic-color-1'] }]}>
      <ScrollView style={styles.scrollView}>
        <SimpleAnimation
          delay={500}
          duration={2000}
          direction="right"
          distance={500}
          fade
          movementType="slide"
          useNativeDriver={true}
          animateOnUpdate={true}>
          <Layout style={{ alignItems: 'center' }}>
            <Image
              source={require('../assets/profilepic.jpg')}
              style={{
                marginVertical: 40,
                borderColor: theme['color-basic-default-border'],
                borderWidth: 3,
                width: 250,
                height: 250,
                resizeMode: 'cover',
                borderRadius: 400/2,
              }}
            />
          </Layout>
        </SimpleAnimation>
        <SimpleAnimation
          delay={500}
          duration={2000}
          direction="left"
          distance={500}
          fade
          movementType="slide"
          useNativeDriver={true}
          animateOnUpdate={true}>
          <Text style={styles.text} category="h1">
            Tom Hibbers
          </Text>
          <Text style={styles.text} appearance="s1">
            Full stack developer
          </Text>
          <Text style={[styles.text, { marginVertical: 20 }]} appearance="hint">
            I'm a software developer with a passion for full stack development. I am currently based
            in South-Africa.
          </Text>
          <Layout
            style={{
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
                  'https://tomhibbers.com/static/media/tomhibberscv.8b13736b6fa45341171a.pdf'
                );
              }}>
              <Text style={{ width: 200 }}>CV</Text>
            </Button>
          </Layout>
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
  text: {
    textAlign: 'center',
  },
  button: {
    width: '40%',
    marginHorizontal: '5%',
  },
});
