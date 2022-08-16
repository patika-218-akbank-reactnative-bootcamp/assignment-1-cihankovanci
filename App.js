import React from "react";
import {View, Text, SafeAreaView} from 'react-native'

import Stories from "./components/stories";

export default function App() {
  return (
    <SafeAreaView>
<View>
  <Text>View1</Text>
</View>
<View>
  <Text>View1</Text>
</View>
<View>
  <Text>View1</Text>
</View>
<View>
  <Text>View1</Text>
  <Stories 
  />
</View>
<View>
  <Text>View1</Text>
</View>
</SafeAreaView>
  );
};