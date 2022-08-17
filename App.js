import React from "react";
import {View, Text, SafeAreaView} from 'react-native'

import Stories from "./components/stories";
import TopButtons from "./components/topButtons";

export default function App() {
  return (
    <SafeAreaView>
<View>
  
  <TopButtons />
</View>

<View>
  
  <Stories 
  />
</View>
<View>
  <Text>View1</Text>
</View>
</SafeAreaView>
  );
};