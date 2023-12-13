import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

// create functional component of Button
const Button = ({ onPress, text, size, theme }) => {

  // use theme from the context
  const { theme: currentTheme } = useContext(ThemeContext);

  // create dynamic styles
  const dynamicButtonStyles = {
    backgroundColor: currentTheme.button,
    borderColor: currentTheme.border,
  };

  // create dynamic text styles
  const dynamictextStyles = {
    color: currentTheme.text,
  };

  //combine default styles with theme-dependent styles
  const buttonStyles = [
    styles.button, 
    dynamicButtonStyles,
    size === "double" && styles.buttonDouble, 
    theme === "secondary" && styles.buttonSecondary,
    theme === "accent" && styles.buttonAccent,
  ];

  // combine default styles with theme-dependent styles
  const textStyles = [
    styles.text,
    dynamictextStyles,  
    theme === "secondary" && styles.textSecondary,
  ];


  return (
    // create touchable opacity
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

// set dimmenstion
const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  // create container
  button: {
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
    borderWidth: 4,
    margin: 5,
  },
  // create text
  text: {
    fontSize: 24,
  },
  // create button double
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40,
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6",
  },
  buttonAccent: {
    backgroundColor: "#f09a36",
  },
  textSecondary: {
    color: "#060606",
  },
});

export default Button;