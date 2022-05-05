import { FlatList } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import { POSTS } from "../db/data";
import HomePost from "../components/HomePost";

export default function Home() {
  return (
    <Screen page="home">
      <FlatList
        data={POSTS}
        style={{ marginTop: -30, zIndex: -1, paddingTop: 30 }}
        renderItem={({ item }) => <HomePost item={item} />}
        contentContainerStyle={{ paddingBottom: 25 }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.username}
      />
    </Screen>
  );
}
