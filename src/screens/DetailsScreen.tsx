import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, Button } from "react-native";
import Header from "@/components/Header";
import AboutScreen from "./AboutScreen";
export default function DetailsScreen({ route, navigation }: any) {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Header title={"Details"}></Header>
      <Button title="Go Back Home" onPress={() => navigation.goBack()} />
      <AboutScreen visible={isModalVisible} setModalVisible={setModalVisible} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
