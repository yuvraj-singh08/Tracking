import { SafeAreaView } from "react-native-safe-area-context";
import {  Text, View } from "react-native";

const Create = () => {

  return (
    <SafeAreaView style={{ height:400, justifyContent: 'center', alignItems: 'center' }} className="bg-primary">
      <View>
        <Text>Create</Text>
      </View>
    </SafeAreaView>
  );
};

export default Create;
