import { View, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";
const imageLink =
  "https://images.unsplash.com/photo-1719937051058-63705ed35502?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8";
const ServiceCard = () => {
  return (
    <View className="border border-gray- w-ful bg-white rounded-lg block">
      <View className="flex flex-row">
        <Image className="h-full rounded-lg w-32" source={imageLink} contentFit="cover" />
        <View className="px-5">
          <View className="min-h-24 flex   flex-col justify-center">
            <Text className="font-cbold text-sm text-gray-800">Studio By MailChuimp</Text>
            <Text className="mt-1 text-sm text-gray-500 text-wrap">Produce professional, reliable streams</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ServiceCard;
