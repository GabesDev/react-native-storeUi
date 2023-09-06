import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native"
import React, { useState } from "react"
import { LinearGradient } from "expo-linear-gradient"
import {
  ArrowDownTrayIcon,
  Bars3CenterLeftIcon,
  BellIcon,
} from "react-native-heroicons/solid"
import { storeColors } from "../theme"
import { categories, featured, games } from "../assets/data"
import FeaturedGames from "../components/featuredGames"
import Categories from "../components/categories"
import TopGames from "../components/topGames"

export default function StoreScreen() {
  return (
    <LinearGradient
      colors={["rgba(58, 131, 244, .4)", "rgba(9,181,211,.4)"]}
      className="w-full flex-1 pt-6">
      <SafeAreaView>
        <ScrollView className="container">
          <View className="flex-row justify-between items-center px-4">
            <Bars3CenterLeftIcon color={storeColors.text} size={30} />
            <BellIcon color={storeColors.text} size={30} />
          </View>
          <Categories categories={categories} />
          <FeaturedGames featured={featured} />
          <TopGames games={games} />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  )
}
