import { View, Text } from "react-native";
import React from "react";
import { ArrowUpRight, PhoneCall } from "lucide-react-native";

const BookRequest = () => {
  return (
    <View className="bg-black rounded-lg mt-5 py-2 px-5 w-36">
      <Text className="text-xs text-white font-cregular">
        <ArrowUpRight className="text-white mr-2" size={14} />
        Send Request
      </Text>
    </View>
  );
};

export default BookRequest;
