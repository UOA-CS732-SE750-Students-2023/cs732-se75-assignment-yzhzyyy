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
            {/* header部分 */}
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

            {/* body部分 */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{padding: 16}}>
                    {/* 在此处定义welcome部分，包括用户头像和标题 */}
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{fontSize:50, color:'#534b7a', paddingLeft:20}}>Hi, yzhzyyy </Text>
                    </View>

                    {/* 在此处设置search组件 */}
                        <Search navigation={router.navigation}/>
                    
                    {/* 这段代码使用了一个自定义的组件 Search，并在其中使用了 searchTerm 和 setSearchTerm 
                        这两个 props。searchTerm 代表当前的搜索词，setSearchTerm 代表用于更新搜索词的函数。
                        当用户点击搜索按钮时，如果当前的搜索词不为空，
                        就使用 router.push 跳转到 /search/${searchTerm} 这个路径 */}

                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Pokemon/>
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
