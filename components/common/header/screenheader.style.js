import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    btnImg: (dimension) => ({
        width: dimension,
        height: dimension,
        borderRadius: 12,
        tintColor: "white"
    }),
    btnContainer:{
        width:40,
        height: 40,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ad9ec7",
    }
});

export default styles;