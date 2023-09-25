import React from "react";
import {Button, Card, Text} from "react-native-paper";
import {ScrollView, StyleSheet, View} from "react-native";
export default function NTFCard() {
    return (
        <ScrollView style={{flex: 1,marginTop: 20}}>
            <Card style={styles.card}>
                <Card.Cover source={{ uri: 'https://pic.ziyuan.wang/2023/09/25/guest_073aad0f5e6de_IP120.207.109.166_UPTIME1695652661.jpg' }} />
                <Card.Content style={{marginTop: 10}}>
                    <Text variant="titleLarge">什么是Lorem Ipsum?</Text>
                    <Text variant="bodyMedium">Lorem Ipsum，也称乱数假文或者哑元文本，
                        是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem
                        Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。在1960年代，”Leatraset”公司发布了印刷着Lorem
                        Ipsum段落的纸张，从而广泛普及了它的使用。最近，计算机桌面出版软件”Aldus
                        PageMaker”也通过同样的方式使Lorem Ipsum落入大众的视野</Text>
                </Card.Content>
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions>
            </Card>
            <Card>
                <Card.Cover source={{ uri: 'https://pic.ziyuan.wang/2023/09/25/guest_073aad0f5e6de_IP120.207.109.166_UPTIME1695652661.jpg' }} />
                <Card.Content>
                    <Text variant="titleLarge">什么是Lorem Ipsum?</Text>
                    <Text variant="bodyMedium">Lorem Ipsum，也称乱数假文或者哑元文本，
                        是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem
                        Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。在1960年代，”Leatraset”公司发布了印刷着Lorem
                        Ipsum段落的纸张，从而广泛普及了它的使用。最近，计算机桌面出版软件”Aldus
                        PageMaker”也通过同样的方式使Lorem Ipsum落入大众的视野</Text>
                </Card.Content>
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions>
            </Card>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    card: {
        marginBottom: 10

    }
})