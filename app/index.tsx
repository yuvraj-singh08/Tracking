import StyledButton from "@/components/StyledButton";
import { useAuth } from "@/hooks/useAuth";
import { RootState } from "@/redux/store";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

export default function Index() {
    const router = useRouter()
    const handleStart = () => {
        router.push('/sign-up')
    }
    return (
        <>
            <SafeAreaView className="bg-white h-full">
                <ScrollView contentContainerStyle={{
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 20,
                    height: "100%"

                }}>
                    <View>
                        <TouchableOpacity onPress={handleStart} style={{ backgroundColor: "aliceblue", borderWidth: 1, borderRadius: 20, width: 300 }}>
                            <Text style={{ alignItems: "center", textAlign: "center" }}>Start</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}   