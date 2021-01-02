import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import CounterScreen from "./src/screens/CounterScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Counter: CounterScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerTitleStyle: { alignSelf: "center" },
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
