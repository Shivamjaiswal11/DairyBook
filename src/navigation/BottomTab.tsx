import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";
import { FC } from "react";

import { textScale } from "../utils/responsiveSize";
import { Platform } from "react-native";
import { Colors } from "../constants/Colors";
import { FONTS } from "../constants/Fonts";
// import { MutualTabIcon, PayTabIcon, StockTabIcon } from "./TabIcon";
import Profile from "../screens/dashboard/Profile";
import Home from "../screens/dashboard/Home";
import Book from "../screens/dashboard/Book";

const Tab = createBottomTabNavigator();

const BottomTab: FC = () => {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          paddingTop: Platform.OS === "ios" ? textScale(5) : 0,
          paddingBottom: Platform.OS === "ios" ? 30 : 10,
          backgroundColor: colors.background,
          height: Platform.OS === "android" ? 70 : 80,
        },
        tabBarActiveTintColor: Colors.active_tab,
        tabBarInactiveTintColor: "#447777",
        headerShadowVisible: true,
        tabBarLabelStyle: {
          fontFamily: FONTS.Medium,
          fontSize: Platform.OS === "ios" ? textScale(9) : textScale(10),
          textAlign: "center",
        },
        tabBarIcon: ({ focused }) => {
          if (route.name === "Home") {
            return null;
            // return <StockTabIcon focused={focused} />;
          }
          if (route.name === "Profile") {
            return null;

            // return <MutualTabIcon focused={focused} />;
          }
          if (route.name === "Book") {
            return null;

            // return <PayTabIcon focused={focused} />;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Book" component={Book} />
    </Tab.Navigator>
  );
};

export default BottomTab;