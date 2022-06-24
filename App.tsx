import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Button, Icon, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
// import { AppNavigator } from './navigation.component';
import { ThemeContext } from './theme-context';
import { Home } from './src/Home';
import { AppNavigator } from './src/AppNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import { Platform, StatusBar } from 'react-native';

const LightIcon = (props) => <Icon {...props} name="sun-outline" />;
const DarkIcon = (props) => <Icon {...props} name="moon-outline" />;
const themeC = require('./app-theme.json');
const App = () => {
  const [theme, setTheme] = React.useState('dark');
  const [isReady, setisReady] = React.useState(false);
  const themeContext = React.useContext(ThemeContext);
  StatusBar.setBarStyle('dark-content');

  if (Platform.OS === 'android') {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent');
  }
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };
  const isDark = theme === 'dark';
  const _cacheResourcesAsync = async () => {
    const images = [require('./assets/splash.png')];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  };
  if (isReady) {
    return (
      <AppLoading
        startAsync={_cacheResourcesAsync}
        onFinish={() => setisReady(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
        <ApplicationProvider {...eva} theme={{ ...eva[theme as 'light' | 'dark'], ...themeC }}>
          <SafeAreaProvider>
            <AppNavigator />
          </SafeAreaProvider>
        </ApplicationProvider>
      </ThemeContext.Provider>
    </>
  );
};
export default App;
