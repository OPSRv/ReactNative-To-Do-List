import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";

import AppLoading from "expo-app-loading";

import { useFonts } from "expo-font";

import { Navbar } from "./src/components/Navbar";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";
import { THEME } from "./src/theme";

// async function loadApplication() {
//   await Font.loadAsync({
//     RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
//     RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
//   });
// }

export default function App() {
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([
    { id: "1", title: "Выучить React Native " },
  ]);

  const [loaded] = useFonts({
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
    MontserratLight: require("./assets/fonts/Montserrat-Light.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;

    // (
    //   <AppLoading
    //   startAsync={loadApplication}
    //   onError={(error) => console.log(error)}
    //   onFinish={() => setIsReady(true)}
    //   />
    // );
  }

  const addTodo = (title) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  const removeTodo = (id) => {
    const todo = todos.find((t) => t.id === id);
    Alert.alert(
      "Удаление элемента",
      `Вы уверены, что хотите удалить "${todo.title}"?`,
      [
        {
          text: "Отмена",
          style: "cancel",
        },
        {
          text: "Удалить",
          style: "destructive",
          onPress: () => {
            setTodoId(null);
            setTodos((prev) => prev.filter((todo) => todo.id !== id));
          },
        },
      ],
      { cancelable: false }
    );
  };

  const updateTodo = (id, title) => {
    setTodos((old) =>
      old.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }
        return todo;
      })
    );
  };

  let content = (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={setTodoId}
    />
  );

  if (todoId) {
    const selectedTodo = todos.find((todo) => todo.id === todoId);
    content = (
      <TodoScreen
        onRemove={removeTodo}
        goBack={() => setTodoId(null)}
        todo={selectedTodo}
        onSave={updateTodo}
      />
    );
  }

  return (
    <View>
      <Navbar title="Todo App!" />
      <View style={styles.container}>{content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 20,
  },
});
