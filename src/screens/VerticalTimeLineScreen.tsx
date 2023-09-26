import React from "react";
import { ScrollView, View, StyleSheet, Text, Image } from "react-native";
import { Avatar } from "react-native-paper";

type data = {
  title: string;
  description: string;
  time: string;
};

const VerticalTimeLineScreen = ({ data }: { data: data[] }) => {
  return (
    <ScrollView style={styles.container}>
      {data.map((item: any, index: number) => (
        <View key={index} style={styles.timelineItem}>
          <View style={styles.timelineDot} />
          <View style={styles.timelineContent}>
            <Text style={styles.timelineTitle}>{item.title}</Text>
            <Text style={styles.time}>{item.time}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <View style={styles.avatarContainer}>
              <Avatar.Image
                source={require("../img/avatar.jpg")}
                size={100}
              />
            </View>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  timelineItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  timelineDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "black",
    marginRight: 10,
  },
  timelineContent: {
    flex: 1,
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 10,
  },
  timelineTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  time: {
    alignSelf: "flex-end",
    color: "#808080",
    marginBottom: 10,
    top: 10,
    right: 30
  },
  description: {
    marginBottom: 10,
  },
  avatarContainer: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

export default VerticalTimeLineScreen;