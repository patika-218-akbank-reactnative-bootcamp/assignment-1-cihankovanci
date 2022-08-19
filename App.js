import React from "react";
import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native'

import Stories from "./components/stories";
import TopButtons from "./components/topButtons";
import Content from "./components/content";

export default function App() {
  return (
    <SafeAreaView>
<View>
  
  <TopButtons
  

  
  />
</View>

<ScrollView   style={styles.container}>
  
  <Stories storyCircleUrl="https://www.pazarlamasyon.com/wp-content/uploads/2018/03/Steve-Jobs-Macintosh.jpg" />
   
  <Content contentPhoto="https://yourwikis.com/wp-content/uploads/2020/01/mark-zuck-img.jpg"
           name='zuck'
           profilePictures="https://reactnative.dev/img/tiny_logo.png"
           comment='Lorem ipsum dolar sit amet, Lorem ipsum dolar sit amet, Lorem ipsum dolar sit amet'
           commentOwner='Patika.dev'
  />
  <Content contentPhoto="https://i01.sozcucdn.com/wp-content/uploads/2017/11/musk.jpg"
           name='musk'
           profilePictures="https://reactnative.dev/img/tiny_logo.png"
           comment='Lorem ipsum dolar sit amet, Lorem ipsum dolar sit amet, Lorem ipsum dolar sit amet'
           commentOwner='Patika.dev'
  />
  
  
  </ScrollView>

</SafeAreaView>
  );
};



const styles = StyleSheet.create({

 
  container: {
      marginBottom: 50,
      
  },
  

 
});