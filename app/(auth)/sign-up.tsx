import { StyleSheet, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'

const SignIn = () => {
  const router = useRouter()
  const handleStart = () => {
    router.push('/home')
  }

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        height: "100%"

      }}>
        <View>
          <TouchableOpacity onPress={handleStart} style={{ backgroundColor: "aliceblue", borderWidth: 1, borderRadius: 20, width: 300 }}>
            <Text style={{ alignItems: "center", textAlign: "center" }}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn