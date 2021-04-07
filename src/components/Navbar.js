import React from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import { THEME } from "../theme";
import { Ionicons } from "@expo/vector-icons";

export const Navbar = ({ title }) => {
  return (
    <View
      style={{
        ...styles.navbar,
        ...Platform.select({
          ios: styles.navbarIos,
          android: styles.navbarAndroid,
        }),
      }}
    >
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 10,
  },
  navbarAndroid: {
    backgroundColor: THEME.MAIN_COLOR,
  },
  navbarIos: {
    borderBottomColor: THEME.MAIN_COLOR,
    borderWidth: 1,
  },
  text: {
    color: Platform.OS === "ios" ? THEME.MAIN_COLOR : "#fff",
    fontSize: 20,
    fontFamily: "RobotoBold",
  },
});
