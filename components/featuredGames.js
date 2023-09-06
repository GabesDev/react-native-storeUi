import { View, Text, ScrollView } from "react-native"
import React from "react"
import GameCard from "./gameCard"
import { storeColors } from "../theme"

export default function FeaturedGames({ featured }) {
  return (
    <View className="mt-3 space-y-4">
      <Text
        style={{ color: storeColors.text }}
        className="ml-4 text-lg font-bold">
        Featured Games
      </Text>
      <View className="pl-4">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {featured.map((item, index) => {
            return <GameCard key={index} game={item} />
          })}
        </ScrollView>
      </View>
    </View>
  )
}
