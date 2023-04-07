import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    searchBtn:{
        width: 50,
        height: 50,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        marginRight:0
    },
    searchBtnImage: {
        width: "50%",
        height: "50%",
        tintColor: "#c06f98",
    },
    searchContainer: {
        justifyContent: "center", //将子元素在主轴方向上居中对齐
        alignItems: "center", //将子元素在交叉轴方向上居中对齐
        flexDirection: "row", 
        marginTop: 20,
        height: 60,
        borderColor: '#bc84a8',
        backgroundColor: '#e9ccd3',
        borderWidth: 2,
        borderRadius: 20,
    },
    searchInput: {
        flex: 1,
        width: "100%",
        height: "100%",
        paddingHorizontal: 16,
        textAlign:"left",
        paddingLeft: 0,
        fontSize: 15,
    },
})
export default styles;