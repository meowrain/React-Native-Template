import * as React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { Avatar, Modal, Portal } from "react-native-paper";

const AboutScreen = ({ visible, hideModal }: any) => {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.modalContainer}
      >
        <TouchableOpacity style={styles.modalContent} onPress={hideModal}>
            <Avatar.Image source={require('@/img/avatar.jpg')}  size={100} style={styles.img}></Avatar.Image>
          <Text style={styles.text}>欢迎使用纪念日！🫡</Text>
          <Text style={styles.text}>本软件由React Native开发，目前仅支持安卓系统。</Text>
          <Text style={styles.text}>（点击弹出框关闭）</Text>
        </TouchableOpacity>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
  },
  img: {
    marginBottom: 20
  },
  text: {
    fontSize: 15,
  }
});

export default AboutScreen;
