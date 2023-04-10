import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Image, TextInput } from "react-native";
import icons from "../../constants/icons";
import styles from "./Search.style";

export default function Search(){

    return(
        <View style={styles.searchContainer}>
            <TouchableOpacity style={styles.searchBtn}>
                <Image
                    source={icons.search} 
                    resizeMode = 'contain' 
                    style={styles.searchBtnImage}
                />
            </TouchableOpacity>
            
            <TextInput 
                style={styles.searchInput} 
                // When the user modifies the text, this callback function will be called and pass the current text value as a parameter to setSearchTerm.
                placeholder="Search..."
            />
        </View>
    )
}
