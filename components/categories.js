import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import React, { useState } from "react"
import GradientButton from "./gradientButton"
import { storeColors } from "../theme"

export default function Categories({categories}) {
  const [activeCategory, setActiveCategory] = useState("Action")

  return (
    <View className="mt-3 space-y-3">
      <Text
        style={{ color: storeColors.text }}
        className="ml-4 text-3xl font-bold">
        Browse Games
      </Text>
      <View className="pl-4">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((cat) => {
            if (cat == activeCategory) {
              return <GradientButton containerClass="mr-2" value={cat} />
            } else {
              return (
                <TouchableOpacity
                  onPress={() => setActiveCategory(cat)}
                  key={cat}
                  className="bg-blue-200 p-3 px-4 rounded-full mr-2">
                  <Text>{cat}</Text>
                </TouchableOpacity>
              )
            }
          })}
        </ScrollView>
      </View>
    </View>
  )
}
