import React from "react";
import { View, StyleSheet, FlatList, Image } from "react-native";
import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/Todo";

export const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
  let content = (
    <FlatList
      keyExtractor={(item) => item.id}
      data={todos}
      renderItem={({ item }) => (
        <Todo todo={item} onRemove={removeTodo} onOpen={openTodo} />
      )}
    />
  );

  if (todos.length === 0) {
    content = (
      <View style={styles.imageWrap}>
        <Image source={require("../img/Null-logo.png")} />
      </View>
    );
  }

  return (
    <View>
      <View style={styles.input}>
        <AddTodo onSubmit={addTodo} />
      </View>
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  input: { marginTop: 10 },
  imageWrap: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    padding: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
