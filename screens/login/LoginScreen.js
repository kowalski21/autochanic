import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
const LoginScreen = () => {
  return (
    <View className="flex-1 p-8 pt-5">
      <View className="items-center mb-8">
        {/* <Image
          resizeMode="cover"
          source={require("/Users/kowalski/Code/mobile-apps/ImageClassifier/assets/acess_account.png")}
          className="w-full h-64 rounded-xl"
        /> */}
      </View>
      <Text className="text-3xl font-bold text-center mb-4">Login</Text>
      <Text className="text-lg mb-0 font-cbold">Let’s Get Started</Text>
      <Text className="text-sm mb-8 font-cregular text-gray-500">Login to an account</Text>
      <Text className="text-sm font-cbold mb-2">Email</Text>
      <TextInput
        autoCapitalize="none"
        className="border-2 border-gray-800 rounded-md p-4 mb-4"
        placeholder="john@email.com"
      />
      <Text className="text-sm font-cbold mb-2">Password</Text>
      <TextInput
        secureTextEntry={true}
        autoCapitalize="none"
        className="border-2 border-gray-800 rounded-md p-4 mb-4"
        placeholder="Password"
      />

      <TouchableOpacity className="bg-black rounded-md p-4">
        <Text className="text-center font-cregular text-md text-white font-bold">Login</Text>
      </TouchableOpacity>

      <View className="flex-row justify-center mt-4">
        <Text className="text-gray-500 font-cregular">Not A Member ? </Text>
        <Link href={"/register"} asChild>
          <TouchableOpacity>
            <Text className="text-gray-800 font-bold">Sign Up</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default LoginScreen;
