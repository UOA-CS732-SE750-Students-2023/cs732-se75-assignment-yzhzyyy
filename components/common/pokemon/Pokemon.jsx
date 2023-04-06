import {View, Text, Image, ScrollView} from 'react-native';
import styles from './Pokemon.style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

const data = require('../../../pokemon.json');

export default function Pokemon(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>My Pokemon</Text>
                <TouchableOpacity><Text style={styles.headerBtn}>Swipe to view more</Text></TouchableOpacity>
            </View>
            <LinearGradient 
                    showsVerticalScrollIndicator={false}
                    style={styles.pokemonCard}
                    start={{x: 0.25, y: 0.25}}
                    end={{x: 0.75, y: 0.75}}
                    locations={[0, 0.1, 0.5, 0.9, 1]}
                    colors={['#ad9ec7', '#e0c8d1', '#bc84a8', '#e0c8d1', '#ad9ec7']}
                    >
            <ScrollView pagingEnabled={true} horizontal={true} style={styles.container} showsVerticalScrollIndicator={false}>
                {data.map(item => (
                    <TouchableOpacity key={item.id} style={styles.logoContainer}>
                        <Image source={{uri: item.imageUrl}} style={styles.logoImage}/>
                        <Text style={styles.pokemonName}>{item.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            </LinearGradient>
        </View>
    );
} 
