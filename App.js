import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Provider } from "./src/context/BlogContext";
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

const NavigationContainer = createStackNavigator(
  {
    // Home: HomeScreen,
    Blogs: IndexScreen,
    Create: CreateScreen,
    Show: ShowScreen,
    Edit: EditScreen,
  },
  {
    initialRouteName: "Blogs",
    defaultNavigationOptions: {
      headerTitleAlign: "center",
      title: "Blog",
    },
  }
);

const App = createAppContainer(NavigationContainer);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
// export default createAppContainer(AppNavigator);
