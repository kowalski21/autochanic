import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { Image } from "expo-image";
import IconBlock from "../../../screens/browse/IconBlock";
import { PhoneCall, MapPin } from "lucide-react-native";
import BookRequest from "../../../screens/browse/BookRequest";

const imageLink =
  "https://images.unsplash.com/photo-1719937051058-63705ed35502?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8";
const ProviderDetailsPage = () => {
  return (
    <View className="flex-1">
      <Image className=" h-[300px]" source={imageLink} contentFit="cover" />
      <View className="px-5">
        <Text className="font-cbold text-2xl mt-2">Company Title</Text>
        <View className="flex justify-between flex-row">
          <View className="bg-white rounded-2xl py-2 px-5">
            <Text className="text-xs font-cregular">
              <MapPin className="text-gray-800 mr-2" size={11} />
              Kumasi,Ayeduase
            </Text>
          </View>
          <View className="bg-white rounded-2xl py-2 px-5">
            <Text className="text-xs font-cregular">
              <PhoneCall className="text-gray-800 mr-2" size={11} />
              +233-55-1992-302
            </Text>
          </View>
        </View>

        <Text className="font-cregular text-sm mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate suscipit, reprehenderit quisquam
          repudiandae magni ad earum quaerat facere nihil amet fugiat deserunt error aliquid ducimus incidunt nobis
          perferendis voluptatum praesentium.
        </Text>
        <Text className="font-cbold text-2xl mt-2 mb-2">Services</Text>
        <ScrollView horizontal className="">
          <IconBlock />
          <IconBlock />
          <IconBlock />
          <IconBlock />
          <IconBlock />
        </ScrollView>
        <BookRequest />
      </View>
    </View>
  );
};

export default ProviderDetailsPage;
