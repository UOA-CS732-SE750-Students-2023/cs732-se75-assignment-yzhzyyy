import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function modal() {
    return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <StatusBar style="light" />
        <Text>This is a Pokemon List. Under Construction...</Text>
    </View>
    );
}
