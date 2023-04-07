import { Stack, useRouter } from "expo-router"
import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView} from "react-native-gesture-handler";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";
import icons from "../constants/icons";
import Search from "../components/Search/Search";
import Pokemon from "../components/common/pokemon/Pokemon";


export default function Home (){
    const router = useRouter();

    return(
        <SafeAreaView style={{flex:1, backgroundColor: "#ecccc5"}}>
            {/* header*/}
            <Stack.Screen
                options={{
                    headerBackground: () => (
                        <LinearGradient
                            colors={['#ad9ec7', '#ecccc5']}
                            style={{ flex: 1 }}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                        />),
                    headerTitle: '',
                    headerShadowVisible:false,
                    headerLeft: () => (
                        <ScreenHeaderBtn onPress={() => router.push('./modal')} iconUrl={icons.menu} dimension='60%'/>
                    )
                }}
            />

            {/* body */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{padding: 16}}>
                    {/* Welcome */}
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{fontSize:50, color:'#534b7a', paddingLeft:20}}>Hi, yzhzyyy </Text>
                    </View>
                    <Search navigation={router.navigation}/>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Pokemon/>
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
