import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link, useNavigation } from "expo-router";

export default function modal() {
    const navigation = useNavigation();
    const isPresented = navigation.canGoBack();
    return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <StatusBar style="light" />
        {!isPresented && <Link href="../">Dismiss</Link>}
        <Text>This is a Pokemon List. Under Construction...</Text>
    </View>
    );
}
