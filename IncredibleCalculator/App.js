import React, { useState, useContext} from "react";
import { SafeAreaView, StyleSheet, Switch, Text, View } from "react-native";
import Button from "./components/Button";
import Row from "./components/Row";
import calculator, { initialState } from "./utilities/calculator";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import { themes } from "./themes/themes";


// create class component of App
const App = () => {
  // create state
  const [state, setState] = useState(initialState);

  // create theme context
  const { theme , toggleTheme} = useContext(ThemeContext); 

  // create handleTap function
  const handleTap = (type, value) => {
    setState(calculator(type, value, state)); 
  };

  return (
      <View style={styles.container} backgroundColor={theme.background}>
        {/* Status bae here */}
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.switchContainer}> 
            <Switch
              trackColor={{ false: theme.trackColorFalse, true: theme.trackColorTrue }}
              thumbColor={theme.mode === "dark" ? theme.thumbColorDark : theme.thumbColorLight}
              onValueChange={toggleTheme}
              value={theme.mode === "dark" ? true : false}
            />
          </View>
          <Text style={[styles.value, {color: theme.text}]}>
            {parseFloat(state.currentValue).toLocaleString()}
          </Text>

          {/* Do create componentRow */}
          <Row>
            <Button
              text="C"
              theme="secondary"
              onPress={() => handleTap("clear")}
            />

            <Button
              text="+/-"
              theme="secondary"
              onPress={() => handleTap("posneg")}
            />

            <Button
              text="%"
              theme="secondary"
              onPress={() => handleTap("percentage")}
            />

            <Button
              text="/"
              theme="accent"
              onPress={() => handleTap("operator", "/")}
            />
          </Row>

          {/* Number */}
          <Row>
            <Button text="7" onPress={() => handleTap("number", 7)} />
            <Button text="8" onPress={() => handleTap("number", 8)} />
            <Button text="9" onPress={() => handleTap("number", 9)} />
            <Button
              text="X"
              theme="accent"
              onPress={() => handleTap("operator", "*")}
            />
          </Row>

          <Row>
            <Button text="5" onPress={() => handleTap("number", 5)} />
            <Button text="6" onPress={() => handleTap("number", 6)} />
            <Button text="7" onPress={() => handleTap("number", 7)} />
            <Button
              text="-"
              theme="accent"
              onPress={() => handleTap("operator", "-")}
            />
          </Row>

          <Row>
            <Button text="1" onPress={() => handleTap("number", 1)} />
            <Button text="2" onPress={() => handleTap("number", 2)} />
            <Button text="3" onPress={() => handleTap("number", 3)} />
            <Button
              text="+"
              theme="accent"
              onPress={() => handleTap("operator", "+")}
            />
          </Row>

          <Row>
            <Button text="0" onPress={() => handleTap("number", 0)} />
            <Button text="." onPress={() => handleTap("number", ".")} />
            <Button
              text="="
              theme="primary"
              onPress={() => handleTap("equal", "=")}
            />
          </Row>
        </SafeAreaView>
      </View>
  );
};


// create styles of app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: themes.backgroundColor,

  },
  value: {
    fontSize: 80,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
  safeArea: {
    flexGrow: 1,
    marginTop: 20,
    justifyContent: "flex-end",
  },

  switchContainer: {
    margin: 10,
    position: "absolute",
    top: 0,
    right: 0,
  },
});

//wrap App with ThemeProvider

const ThemedApp = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default ThemedApp;
