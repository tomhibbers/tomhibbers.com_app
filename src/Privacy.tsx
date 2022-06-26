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
import { Link, useNavigation } from '@react-navigation/native';
import AnimatedLinearGradient, { presetColors } from './AnimatedGradient';
const Header = () => {
  const theme = useTheme();
  return (
    <View style={{ paddingVertical: 5, backgroundColor: theme['background-basic-color-4'] }}>
      <Text style={{ textAlign: 'center' }} category="h6">
        Tom Hibbers Privacy Policy
      </Text>
    </View>
  );
};
export const Privacy = () => {
  const theme = useTheme();
  const wWidth = Dimensions.get('window').width;
  const navigation = useNavigation();
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
            direction="left"
            distance={wWidth}
            fade
            movementType="slide"
            useNativeDriver={true}
            animateOnUpdate={true}>
            <Card
              style={[styles.card, { backgroundColor: theme['background-basic-color-2'] }]}
              header={Header}>
              <Text style={styles.text}>This policy effective June 23, 2022</Text>
              <Text style={styles.text}>
                We’re committed to protecting your privacy and collecting only the minimum amount of
                info needed to provide our software and services (including the apps Tom Hibbers) —
                referred to as “Services”. Your use of the Services indicates you agree to this
                policy and our
                <Text status={'primary'} onPress={() => navigation.navigate('Terms')}>
                  {' '}
                  terms of use
                </Text>
                .
              </Text>
              <Text style={styles.textHeader} category={'h5'}>
                Summary
              </Text>
              <Text style={styles.text}>
                Nothing in this policy contradicts the following statements:
              </Text>
              <Text style={styles.text}>
                1. We don’t collect any of your personal info, including your IP address, other than
                information you voluntarily provide.
              </Text>
              <Text style={styles.text}>
                2. We don’t sell your personal info to advertisers or other third parties.
              </Text>
              <Text style={styles.text}>
                3. We share your personal info only when legally required, or when reasonably
                necessary to prevent harm in an emergency situation
              </Text>
              <Text style={styles.text}>
                4. We retain your personal info, excluding info you make public, for no more than 30
                days after you request deletion
              </Text>
              <Text style={styles.text}>
                5. We have never received any legal or government demands for user information.
              </Text>
              <Text style={styles.textHeader} category={'h5'}>
                Complete terms
              </Text>
              <Text style={styles.text}>
                As used in this policy, “Personal Info” is data that can identify a particular
                person or device. Aggregate data isn’t considered Personal Info.
              </Text>
              <Text style={styles.textHeader} category={'h6'}>
                1. TomHibbers never collects your Personal Info except to communicate with you
              </Text>
              <Text style={styles.text}>
                Our Services don't collect any of your Personal Info. Unlike most websites, our site
                doesn’t collect your IP address. We do detect non-personally identifiable
                geo-location information to optimize our services, but we definitely don't collect
                your precise geo-location or associate geo-location information with a particular
                user.
              </Text>
              <Text style={styles.text}>
                Because we do not collect information about your online activities over time and
                across third-party websites or online services, there is no need for us to respond
                to a browser’s Do Not Track settings, although we strongly support a consumer’s
                right to set such a preference and encourage all website operators to honor this
                consumer choice.
              </Text>
              <Text style={styles.text}>
                We may request your email address or a username to communicate with you. This info
                is used only as you’d expect and deleted upon request.
              </Text>
              <Text style={styles.text}>
                Optionally, you may choose to provide your email address and communicate with us via
                email.
              </Text>
              <Text style={styles.textHeader} category={'h6'}>
                2. TomHibbers never sells your email address or any other Personal Info you
                volunteer
              </Text>
              <Text style={styles.text}>
                We don’t receive payment in cash or in kind from third parties in exchange for your
                Personal Info. Further, we don’t allow third parties to collect info about you on
                our site through cookies or other means.
              </Text>
              <Text style={styles.textHeader} category={'h6'}>
                3. TomHibbers shares your Personal Info only in specific circumstances
              </Text>
              <Text style={styles.text}>
                There are a few, rare circumstances when we may have to share your Personal Info
                either to obey the law or protect our rights. We’ll share your Personal Info only to
                comply with laws or legally enforceable requests, to enforce our own rights and
                contracts with users or third parties, or to prevent harm to others and their
                property in an emergency situation.
              </Text>
              <Text style={styles.text}>
                In all instances, we’ll share the minimum info necessary to meet the immediate need
                and inform you of our disclosure when legally and practically possible.
              </Text>
              <Text style={styles.textHeader} category={'h6'}>
                4. TomHibbers retains the Personal Info you volunteer for one month or less
              </Text>
              <Text style={styles.text}>
                We remove your Personal Info from our records within 30 days of any request to do
                so.
              </Text>
              <Text style={styles.textHeader} category={'h6'}>
                5. Transparency report
              </Text>
              <Text style={styles.text}>
                As explained above, we will comply with a request for user data when the law
                requires it, but we require valid legal process to compel the disclosure of user
                data to the government; such as a legitimate and properly scoped court order, or a
                search warrant supported by probable cause and issued by an appropriate law
                enforcement authority. We interpret requests narrowly, and we will oppose unlawful
                or overbroad requests for specific user data.
              </Text>
              <Text style={styles.text}>
                Recipients of National Security Requests can only publish reporting bands instead of
                specific figures. If we receive such a request, we may challenge these reporting
                bands, in addition to opposing any unlawful or overbroad requests.
              </Text>
              <Text style={styles.textHeader} category={'h5'}>
                Changes to this policy
              </Text>
              <Text style={styles.text}>
                We may make small, inconsequential changes to this policy with or without notice to
                you, so you’re encouraged to review the policy from time to time. Substantive
                changes to this policy will be emailed to users who submit a request to
                <Text
                  status={'primary'}
                  onPress={() => Linking.openURL('mailto:tomhibbers@gmail.com')}>
                  {' '}
                  tomhibbers@gmail.com
                </Text>
                .
              </Text>
              <Text style={styles.textHeader} category={'h5'}>
                Contact
              </Text>
              <Text style={styles.text}>
                You can contact us at{' '}
                <Text
                  status={'primary'}
                  onPress={() => Linking.openURL('mailto:tomhibbers@gmail.com')}>
                  {' '}
                  tomhibbers@gmail.com{' '}
                </Text>
                if you have any questions about this policy.
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
    textAlign: 'left',
    marginVertical: 5,
  },
  textHeader: {
    textAlign: 'left',
    marginTop: 25,
  },
  button: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    marginVertical: 0,
    marginHorizontal: 5,
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
