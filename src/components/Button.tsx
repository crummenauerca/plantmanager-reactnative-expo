import React from "react";
import { Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from "react-native";
import colors from "../styles/colors";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.6} {...rest}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  buttonText: {
    fontSize: 24,
    color: "white",
  },
});
