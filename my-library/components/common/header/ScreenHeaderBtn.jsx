import { Image, TouchableOpacity } from "react-native";
import styles from "./screenheader.style";

export default function ScreenHeaderBtn({iconUrl, dimension, onPress}){

    return(
        <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
            <Image
                source={iconUrl}
                resizeMode='cover'
                style={styles.btnImg(dimension)}
            />
        </TouchableOpacity>
    );
};