import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import React from "react";

const RegisterScreen = () => {
  return (
    <View className="flex-1 p-8 mt-6">
      <Text className="text-4xl font-extrabold text-center leading-10 tracking-wider font-cbold mb-12">Register</Text>
      <Text className="text-2xl font-cbold">Lets Get Started</Text>
      <Text className="text-xs text-gray-500 font-cregular mb-16">Create an Account</Text>

      <Text className="text-md font-cbold mb-2">Full Name</Text>
      <TextInput
        autoCapitalize="none"
        className="border-2 border-gray-800 rounded-md p-4 mb-4"
        placeholder="Ex. John Doe"
      />
      <Text className="text-md font-cbold mb-2">Email</Text>
      <TextInput
        autoCapitalize="none"
        className="border-2 border-gray-800 rounded-md p-4 mb-4"
        placeholder="Ex. John Doe"
      />
      <Text className="text-sm font-semibold mb-2">Password</Text>
      <TextInput
        secureTextEntry={true}
        autoCapitalize="none"
        className="border-2 border-gray-800 rounded-md p-4 mb-4"
        placeholder="Ex. John Doe"
      />

      <TouchableOpacity className="bg-black rounded-md p-4">
        <Text className="text-center text-white font-bold">Register</Text>
      </TouchableOpacity>

      <View className="flex-row justify-center mt-4">
        <Text className="text-gray-500">Already have an account? </Text>
        <Link href={"/logout"} asChild>
          <TouchableOpacity>
            <Text className="text-gray-800 font-bold">Sign In</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default RegisterScreen;
