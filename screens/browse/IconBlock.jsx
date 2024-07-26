import { View, Text } from "react-native";
import React from "react";
import { BusFront } from "lucide-react-native";

const IconBlock = () => {
  return (
    <View className="bg-white flex rounded-xl p-5 w-[180px] mr-5">
      <BusFront className="text-gray-800" />
      <View className="mt-5">
        <Text className="text-lg  font-cbold text-gray-800 ">Responsive</Text>
        <Text className="mt-1 text-gray-600 text-sm font-cregular">Responsive</Text>
      </View>
    </View>
  );
};

export default IconBlock;
