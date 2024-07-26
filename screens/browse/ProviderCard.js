import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import React from "react";
import { Link } from "expo-router";
const imageLink =
  "https://images.unsplash.com/photo-1719937051058-63705ed35502?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8";
const ProviderCard = ({ id = 1 }) => {
  return (
    <View className="min-h-[400px] bg-white rounded-2xl mb-5">
      <Image className="flex-1 rounded-t-2xl h-10" source={imageLink} contentFit="cover" />
      <Text className="mt-1 px-5 pt-1 font-cbold text-xl">ProviderCard</Text>
      <View className="flex px-5 flex-row gap-1 mb-2">
        <Text className="text-sm text-gray-400 font-cbold">Kumasi,</Text>
        <Text className="text-sm  text-gray-400 font-cbold">Ayeduase</Text>
      </View>

      <Text className="px-5 font-cregular pb-5">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo inventore nobis quisquam veritatis! Quasi porro,
        ipsam, animi ad nobis maiores quod, nulla recusandae nesciunt vitae voluptatem! Aut porro voluptatem est?
      </Text>

      <Link href={`/browse/${id}`} asChild>
        <TouchableOpacity className="cursor:pointer rounded-md bg-gray-900 px-1 py-2 w-[100px] mx-5 mb-5 ">
          <Text className="text-center font-cbold text-sm text-white font-bold">View</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default ProviderCard;
