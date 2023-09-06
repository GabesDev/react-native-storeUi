import { View, Text, TouchableOpacity, Image } from "react-native"
import React, { useState } from "react"
import { storeColors } from "../theme"
import { ArrowDownTrayIcon } from "react-native-heroicons/solid"
import GradientButton from "./gradientButton"

export default function TopGames({games}) {

  const [selectedGame, setSelectedGame] = useState(null)

  return (
    <View className="mt-3 space-y-4">
      <View className="flex-row justify-between mb-2 items-center">
        <Text
          style={{ color: storeColors.text }}
          className="ml-4 text-lg font-bold">
          Top Action Games
        </Text>
        <TouchableOpacity className="mr-4">
          <Text className="text-blue-600 font-bold">See all</Text>
        </TouchableOpacity>
      </View>
      <View>
        {games.map((game, index) => {
          let bg =
            game.id === selectedGame ? "rgba(255, 255, 255, .4)" : "transparent"
          return (
            <TouchableOpacity
              style={{ backgroundColor: bg }}
              onPress={() => setSelectedGame(game.id)}
              className="mx-4 p-2 mb-2 flex-row rounded-3xl"
              key={index}>
              <Image source={game.image} className="w-20 h-20 rounded-2xl" />
              <View className="flex-1 flex justify-center pl-3 space-y-3">
                <Text
                  style={{ color: storeColors.text }}
                  className="font-semibold">
                  {game.title}
                </Text>
                <View className="flex-row space-x-3">
                  <View className="flex-row space-x-1">
                    <Image
                      className="h-4 w-4 opacity-80"
                      source={require("../assets/images/fullStar.png")}
                    />
                    <Text className="text-sm text-gray-700">
                      {game.stars} stars
                    </Text>
                  </View>
                  <View className="flex-row space-x-1">
                    <ArrowDownTrayIcon
                      size="15"
                      className="text-blue-500"
                      color={"blue"}
                    />
                    <Text className="text-sm text-gray-700">
                      {game.downloads}
                    </Text>
                  </View>
                </View>
              </View>
              <View className="flex justify-center items-center">
                <GradientButton value="play" buttonClass="py-2 px-5" />
              </View>
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}
