import { View, Text, Button, TouchableOpacity, Image } from "react-native";
import { useFonts } from "expo-font";
import React from "react";
import { router } from "expo-router";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Camera, Search, BellRing, Map, BusFront, Bookmark } from "lucide-react-native";
import FeatureCard from "../../components/FeatureCard";
import { Link } from "expo-router";
const HomeScreen = () => {
  return (
    <View className="mt-10 px-10">
      <Text className="font-cbold text-center text-5xl tracking-wider">AutoChanic</Text>
      <Text className="font-cmedium  text-center mt-2 text-2xl">Your On the Go Mechanical Assistance</Text>

      <Text className="mt-6 font-cregular text-lg text-gray-600">
        Providing the best in service mechanical services on te go!. Have an emergency, See below for features
      </Text>

      <Text className="font-cbold text-2xl  mt-5 mb-10">Features</Text>

      <View className="flex flex-row justify-between ml-0 w-100 flex-wrap  mr-2">
        <FeatureCard title={"Notifications"} icon={<BellRing color="white" size={35} />} />
        <FeatureCard title={"Availability"} icon={<Map color="white" size={35} />} />
        <FeatureCard title={"Vehicle Info"} icon={<BusFront color="white" size={35} />} />
        <FeatureCard title={"Saved Search"} icon={<Bookmark color="white" size={35} />} />
      </View>

      <View className="flex  mt-5 mb-5">
        <Link href="/register" asChild>
          <TouchableOpacity className="cursor:pointer rounded-md bg-gray-900 px-3.5 py-2.5 ">
            <Text className="text-center font-cbold text-lg text-white font-bold">Register</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default HomeScreen;
