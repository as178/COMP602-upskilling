import "react-native-gesture-handler";
import HomeScreen from "./screens/HomeScreen.jsx";
import ProfileScreen from "./screens/ProfileScreen";
import UserScreen from "./screens/UserScreen";
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Entypo";
import DrawerContent from "./DrawerContent";
import LoginPage from "./screens/Login&Register/Login";
import RegisterPage from "./screens/Login&Register/Register";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StackNav = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        statusBarBackgroundColor: "blue",
        headerShown: false,
        headerStyle: {
          backgroundColor: "blue",
        },
        headerTintColor: "white",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        // options={{
        //   headerLeft: () => {
        //     return (
        //       <Icon
        //         name="menu"
        //         onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        //         size={30}
        //         color="rgba(255, 255, 255, 1)"
        //       />
        //     );
        //   },
        // }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen
        name="User"
        component={UserScreen}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen name="LoginUser" component={LoginNav} />
    </Stack.Navigator>
  );
};

//responsible for all screens inside home screen
const DrawerNav = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Home" component={StackNav} />
    </Drawer.Navigator>
  );
};

const LoginNav = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Register" component={RegisterPage} />
      <Stack.Screen name="Home" component={DrawerNav} />
    </Stack.Navigator>
  );
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function getData() {
    const data = await AsyncStorage.getItem("isLoggedIn");
    console.log(data, "at app.jsx");
    setIsLoggedIn(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    //all screens before logging in
    <NavigationContainer>
      {isLoggedIn ? <DrawerNav /> : <LoginNav />}
    </NavigationContainer>
  );
}

export default App;
