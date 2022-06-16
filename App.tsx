import React from "react";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Button,
  IconRegistry,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
// import { AppNavigator } from './navigation.component';
import { ThemeContext } from "./theme-context";
import { Home } from "./src/Home";
import { AppNavigator } from "./src/AppNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  const [theme, setTheme] = React.useState("light");
  const themeContext = React.useContext(ThemeContext);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };
  return (
    <>
      <SafeAreaProvider>
        <IconRegistry icons={EvaIconsPack} />
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <ApplicationProvider {...eva} theme={eva[theme as "light" | "dark"]}>
            {/* <Home/> */}
            <AppNavigator />
          </ApplicationProvider>
        </ThemeContext.Provider>
      </SafeAreaProvider>
    </>
  );
};
export default App;
