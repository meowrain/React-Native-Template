import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { NFTCard } from "@/components";
import Header from "@/components/Header";
import VerticalTimeLineScreen from "./VerticalTimeLineScreen";
import timeLineData from "@/constants/timeLineData.json"
export default function HomeScreen({ navigation }: any) {
  const datas = timeLineData;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title={"Home"}></Header>
      {/* <NFTCard /> */}
      <VerticalTimeLineScreen data={datas}/>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
