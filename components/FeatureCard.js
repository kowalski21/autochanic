import { View, Text } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Camera, Search, BellRing } from "lucide-react-native";
const FeatureCard = ({ icon, title }) => {
  return (
    <View className="flex flex-col items-center justify-center w-40 h-30 mb-5 shadow-xs border-0 bg-black rounded-3xl p-6">
      <Text>{icon ? icon : <BellRing className="animate-pulse" color="white" size={35} />}</Text>
      <Text className="text-md font-cbold text-gray-100 mt-2 mb-2">{title ? title : "Alerts"}</Text>
    </View>
  );
};

export default FeatureCard;
