import React from "react";
import AppLoading from "expo-app-loading";

import { TodoState } from "./src/context/todo/TodoState";
import { MainLayout } from "./src/MainLayout";
import { useFonts } from "expo-font";
import { ScreenState } from "./src/context/screen/ScreenState";

export default function App() {
  const [loaded] = useFonts({
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <ScreenState>
      <TodoState>
        <MainLayout />
      </TodoState>
    </ScreenState>
  );
}
