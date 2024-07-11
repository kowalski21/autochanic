import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";
const username = "kowalski" !== "dev";
const TabLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#000000" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",

          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="classify"
        options={{
          title: "Upload/Classify",
          href: null,
          tabBarIcon: ({ color }) => <Ionicons name="cloud-upload" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="register"
        options={{
          title: "Register",
          href: null,
          tabBarIcon: ({ color }) => <Ionicons name="cloud-upload" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="logout"
        options={{
          title: "Login",
          href: null,
          tabBarIcon: ({ color }) => <Ionicons name="cloud-upload" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
