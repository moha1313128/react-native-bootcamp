import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import PasswordScreen from "./src/screens/PasswordScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Password: PasswordScreen,
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
