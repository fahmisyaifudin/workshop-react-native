// In App.js in a new project

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { NewsScreen, ProfileScreen } from "./src/pages";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerStyle: {
            borderBottomColor: "grey",
            borderBottomWidth: 0.25,
          },
        }}
      >
        <Tab.Screen
          name="News"
          component={NewsScreen}
          options={{
            tabBarIcon: ({ color }) => {
              return <AntDesign name="home" size={24} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color }) => {
              return <AntDesign name="user" size={24} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
