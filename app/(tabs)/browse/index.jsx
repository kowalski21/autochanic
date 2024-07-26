import { View, Text, TextInput, ScrollView } from "react-native";
import React from "react";
import ProviderCard from "../../../screens/browse/ProviderCard";
import ServiceCard from "../../../screens/browse/ServiceCard";

const BrowsePage = () => {
  return (
    <View className="flex-1">
      <View className="bg-white h-[150px] px-5 py-5">
        <TextInput
          placeholder="Search Providers"
          className="h-10 border-2 mt-3 pt-2 rounded-lg  border-gray-800 text-sm font-cmedium px-5 pb-2"
        />
        <TextInput
          placeholder="Search By Location"
          className="h-10 border-2 mt-3 pt-2 rounded-lg  border-gray-800 text-sm font-cmedium px-5 pb-2"
        />
      </View>

      <ScrollView className="mt-5 px-5 flex">
        <ProviderCard />
        <ProviderCard />
        <ProviderCard />
        <ProviderCard />
      </ScrollView>
    </View>
  );
};

export default BrowsePage;
