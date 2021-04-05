import React from "react";
import { View, StyleSheet } from "react-native";
import { AppText } from "../components/ui/AppText";

export const Navbar = ({ title }) => {
  return (
    <View style={styles.navbar}>
      <AppText style={styles.text}>{title}</AppText>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    width: "100%",
    marginTop: 20,
  },
  text: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
  },
});
