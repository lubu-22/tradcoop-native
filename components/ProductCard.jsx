import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { MapPinIcon, StarIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

/* Coop Product Card */

const ProductCard = ({
  id,
  imgUrl,
  title,
  rating,
  price,
  address,
  description,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ProductDetails", {
          title,
          id,
          imgUrl,
          title,
          rating,
          address,
          description,
          price,
        })
      }
      className="bg-[#f0e9dc] mx-3 shadow-md shadow-amber-800 rounded-lg"
    >
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="px-3 pb-3 space-y-1">
        <View className="flex-row justify-between pt-2 items-baseline">
          <Text
            style={{ fontFamily: "Poppins_700Bold" }}
            className="text-base text-[#4E1703]"
          >
            {title}
          </Text>
          <Text
            style={{ fontFamily: "Poppins_800ExtraBold" }}
            className="text-xl text-[#7B420E]"
          >
            {price}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <Text
            style={{ fontFamily: "Poppins_600SemiBold" }}
            className="text-[#7B420E]"
          >
            <Text className="text-[#C3700D]">Cooperative :</Text> {title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
