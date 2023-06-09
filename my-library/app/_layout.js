import { Stack } from "expo-router";

export default function Layout(){
    return (
    <Stack>
        <Stack.Screen
            name="home"
            options={{headerShown: false}}
        />
        <Stack.Screen
        name="modal"
        options={{
          // Set the presentation mode to modal for our modal route.
            presentation: "modal",
            }}
        />  
    </Stack>
    )
}
