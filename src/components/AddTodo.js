import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { THEME } from "../theme";

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState([]);

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
    } else {
      Alert.alert("Назва справи не може бути пустою");
    }
  };

  return (
    <View style={style.block}>
      <TextInput
        style={style.input}
        onChangeText={setValue}
        value={value}
        placeholder="Введіть назву справи"
        autoCorrect={true}
        autoCapitalize="none"
        keyboardType="default"
      />
      <Button title="Додати" onPress={pressHandler} />
    </View>
  );
};

const style = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    width: "70%",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 25,
    borderBottomColor: THEME.MAIN_COLOR,
    borderTopColor: "black",
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
  },
});
