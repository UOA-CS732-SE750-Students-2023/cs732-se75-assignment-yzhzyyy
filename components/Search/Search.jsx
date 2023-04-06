import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Image, TextInput } from "react-native";
import icons from "../../constants/icons";
import styles from "./Search.style";

export default function Search(){

    return(
        <View>
            <View style={styles.searchContainer}>
            <TouchableOpacity style={styles.searchBtn}>
                <Image
                    source={icons.search} 
                    resizeMode = 'contain' 
                    style={styles.searchBtnImage}
                />
            </TouchableOpacity>
            
            <TextInput 
                style={styles.searchInput} // 当用户修改文本时，该回调函数就会被调用，并传递当前文本值作为参数给setSearchTerm
                placeholder="Search..."
            />
            </View>

        </View>
    )
}
