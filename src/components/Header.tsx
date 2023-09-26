import { Appbar, Menu } from "react-native-paper";
import React, { useState } from "react";
import AboutScreen from "@/screens/AboutScreen";
type prop = {
  title: string;
};

export default function Header(props: prop) {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <>
      <Appbar.Header>
        <Menu
          visible={isMenuVisible}
          onDismiss={closeMenu}
          anchor={<Appbar.Action icon="menu" onPress={openMenu} />}
        >
          <Menu.Item onPress={() => {}} title="创建纪念日" leadingIcon="plus"/>
          <Menu.Item onPress={() => {}} title="设置" leadingIcon="cog-outline"/>
          <Menu.Item onPress={openModal} title="关于" leadingIcon="cellphone-information"/>
        </Menu>
        <Appbar.Content title={props.title} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>

      {/* 添加AboutScreen组件 */}
      <AboutScreen
        visible={isModalVisible}
        showModal={openModal}
        hideModal={closeModal}
      />
    </>
  );
}