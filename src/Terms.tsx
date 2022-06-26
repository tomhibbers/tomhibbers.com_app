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
        Tom Hibbers Terms of Use
      </Text>
    </View>
  );
};
export const Terms = () => {
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
        speed={4000}
      />
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
              Thank you for using Tom Hibbers. These terms of use — referred to as “Terms” — apply
              to your use of Tom Hibber’s software and services (including the apps Tom Hibbers) —
              referred to as “Services”. Your use of the Services indicates you agree to the Terms,
              so please read carefully.
            </Text>
            <Text style={styles.textHeader} category={'h5'}>
              Software license and updates
            </Text>
            <Text style={styles.text}>
              Access to some of our Services requires you to download a software package — referred
              to as “Software”. The Software is licensed to you and not sold, subject to the terms
              of this agreement. We grant you a nonexclusive, nontransferable, revocable license to
              use the Software solely for your personal purposes. This license enters into force
              through your installation or use of the Software in accordance with the Terms. All
              rights and licenses not expressly granted to you under this agreement are retained by
              Tom Hibbers. We may update the Software on your device automatically to provide new
              features and security upgrades.
            </Text>
            <Text style={styles.textHeader} category={'h5'}>
              Open-source code
            </Text>
            <Text style={styles.text}>
              Some of our code is available under open-source licenses that constitute separate
              written agreements. There may be provisions in the open-source licenses that expressly
              override these terms.
            </Text>
            <Text style={styles.textHeader} category={'h5'}>
              Protected property
            </Text>
            <Text style={styles.text}>
              The software and other technology we use to provide the Services are protected by
              copyright, trademark, and other laws of both the United States and foreign countries.
              These terms don’t give you the right to use the Tom Hibbers logos, trademarks, domain
              names, or other brand features.
            </Text>
            <Text style={styles.textHeader} category={'h5'}>
              Restrictions
            </Text>
            <Text style={styles.text}>
              You agree that you won’t attempt to or in fact do the following to the Services:
              probe, scan, or test the vulnerability of any system or network; breach or otherwise
              circumvent any security or authentication measures; access, tamper with, or use
              non-public areas of the Services, areas of the Services you haven’t been invited to
              including Tom Hibbers’s or our service providers’ computer systems; or commercialize,
              reproduce, modify, translate, create any derivative works, circumvent, disable,
              decompile, disassemble, reverse engineer, or otherwise attempt to derive the source
              code for the Services (our open-source code is subject to separate licenses).
            </Text>
            <Text style={styles.textHeader} category={'h5'}>
              Responsibility for content
            </Text>
            <Text style={styles.text}>
              All content submitted to or available through the Services is the sole responsibility
              of the person who submitted the content. By submitting, posting, or displaying content
              as part of the Services, you give Tom Hibbers the right to use such content. Tom
              Hibbers doesn’t control, monitor, or have any detailed knowledge of the content.
              Therefore, you may be exposed to info that’s incorrect, offensive, or otherwise
              objectionable. Tom Hibbers shall not be liable for the content and other info spread
              or delivered through or in connection with the Services. You agree that you shall bear
              all risks associated with the use of such info. We have no responsibility to remove
              content you make public — for example, comments you make on our blog or forum — so
              please be careful with what you post.
            </Text>
            <Text style={styles.textHeader} category={'h5'}>
              Linked sites and services
            </Text>
            <Text style={styles.text}>
              We choose our third-party providers and payment processors carefully but we’re not
              responsible for the practices employed by websites linked to or from the Services, nor
              their information or content. When you use a link to go from the Services to another
              website, your browsing and interaction is subject to that website's own rules and
              policies, not ours. Please read over those rules and policies before proceeding.
            </Text>
            <Text style={styles.textHeader} category={'h5'}>
              Support
            </Text>
            <Text style={styles.text}>
              We do our best to provide a great service, but we have no obligation to provide
              support or maintenance for the Services under this agreement. However, we may, at our
              sole discretion, provide limited technical support, upgrades, and updates.
            </Text>
            <Text style={styles.textHeader} category={'h5'}>
              Termination
            </Text>
            <Text style={styles.text}>
              You may terminate this agreement at any time by ceasing to participate in or access
              the Services. We may terminate this agreement and your use at any time, without cause
              and without notice. This agreement will automatically terminate if you fail to comply
              with the Terms. Upon any termination, you agree to uninstall and stop using the
              Services.
            </Text>
            <Text style={styles.textHeader} category={'h5'}>
              No warranty
            </Text>
            <Text style={styles.text}>
              (The next paragraph is capitalized because of its importance.)
            </Text>
            <Text style={styles.text}>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, Tom Hibbers MAKES NO WARRANTY OR
              REPRESENTATION WITH RESPECT TO THE SERVICES, THEIR QUALITY, PERFORMANCE,
              MERCHANTABILITY, OR FITNESS FOR A PARTICULAR PURPOSE. AS A RESULT, THE SERVICES ARE
              PROVIDED “AS IS” AND YOU’RE ASSUMING THE ENTIRE RISK AS TO THEIR QUALITY AND
              PERFORMANCE.
            </Text>
            <Text style={styles.text}>
              You understand and acknowledge that Tom Hibbers won’t be liable for problems
              attributable to the operation of the Services. Some states don’t allow these types of
              limiting terms.
            </Text>
            <Text style={styles.textHeader} category={'h5'}>
              Limitation of liability
            </Text>
            <Text style={styles.text}>(Again with the capitalization.)</Text>
            <Text style={styles.text}>
              YOU EXPRESSLY AGREE THAT Tom Hibbers SHALL, IN NO EVENT, BE LIABLE FOR ANY DIRECT,
              INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT
              LIMITED TO DAMAGES FOR LOSS OF PROFITS AND GOODWILL, ARISING OUT OF THE USE OR
              INABILITY TO USE THE SERVICES, even if advised of the possibility of such damages.
              Your only right or remedy with respect to any problems or dissatisfaction with the
              Services is to uninstall and stop using the Services.
            </Text>
            <Text style={styles.textHeader} category={'h5'}>
              Severability
            </Text>
            <Text style={styles.text}>
              If any of, or portions thereof, the Terms are invalid or unenforceable, the court
              shall reform the Terms to include an enforceable term as close to the intent of the
              original term as possible. All other terms shall remain unchanged.
            </Text>
            <Text style={styles.textHeader} category={'h5'}>
              Waiver
            </Text>
            <Text style={styles.text}>
              The waiver or failure of Tom Hibbers to exercise any right provided for in the Terms
              shall not be deemed a waiver of any further or future right under the Terms.
            </Text>
            <Text style={styles.textHeader} category={'h5'}>
              Governing law and dispute resolution
            </Text>
            <Text style={styles.text}>
              The Terms and any dispute arising from your use of the Services shall be governed by
              and construed in accordance with US federal law and the laws of the state of
              California. All disputes relating to the Terms shall be settled in the California
              State Court, County of Santa Clara or in the US Federal Court, Northern District of
              California. You and Tom Hibbers agree to submit to the jurisdiction of and agree that
              venue is proper in these courts in any such legal action or proceeding.
            </Text>
            <Text style={styles.textHeader} category={'h5'}>
              Changes to the Terms
            </Text>
            <Text style={styles.text}>
              We may make small, inconsequential changes to the Terms with or without notice to you,
              so you’re encouraged to review the Terms from time to time. Changes we consider
              significant will be emailed to users who subscribe to the Tom Hibbers newsletter or to
              those who submit a request to{' '}
              <Text
                status={'primary'}
                onPress={() => Linking.openURL('mailto:Tom Hibbers@gmail.com')}>
                {' '}
                Tom Hibbers@gmail.com
              </Text>
              . By continuing to use the Services after revisions become effective, you are agreeing
              to the revised terms. If you don’t agree to the revised terms, please stop using the
              Services.
            </Text>
            <Text style={styles.textHeader} category={'h5'}>
              Contact
            </Text>
            <Text style={styles.text}>
              You can contact us at{' '}
              <Text
                status={'primary'}
                onPress={() => Linking.openURL('mailto:Tom Hibbers@gmail.com')}>
                {' '}
                Tom Hibbers@gmail.com
              </Text>{' '}
              if you have any questions about the Terms.
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
