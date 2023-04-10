import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        marginTop: 0,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20
        },
    headerTitle: {
        fontSize: 24,
        color: "#534b7a",
        },
    headerBtn: {
        fontSize: 16,
        color: "#83829A",
        },
    logoContainer:{
        width: 395,
        height: 395,
        justifyContent: "center",
        alignItems: "center",
    },
    logoImage: {
        width:'60%',
        height: '60%',
        resizeMode:"contain",
    },
    pokemonName: {
        marginTop: 30,
        fontSize: 20,
        color:"white"
    },
    pokemonCard:{
        marginTop:50,
        borderRadius: 500,
        width:395,
        height:395,
        flex: 1
    }
});

export default styles;
