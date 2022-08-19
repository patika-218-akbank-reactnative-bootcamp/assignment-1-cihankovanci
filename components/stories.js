import React from "react";
import {View, Text, Image, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';

const Stories = ({storyCircleUrl}) => {
    return(
        <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
        <View style={styles.container}>
            
            <Image style={styles.storyCircle} source={{ uri: storyCircleUrl, }}  />
        
          <Image
        style={styles.storyaddCircle}
        source={{
          uri: 'https://icon-library.com/images/blue-plus-icon/blue-plus-icon-10.jpg',
        }}
        />
        



        <Image style={styles.storyCircle} source={{ uri: 'https://yourwikis.com/wp-content/uploads/2020/01/mark-zuck-img.jpg' }}  />
        <Image style={styles.storyCircle} source={{ uri: 'https://i01.sozcucdn.com/wp-content/uploads/2017/11/musk.jpg', }}  />
        <Image style={styles.storyCircle} source={{ uri: storyCircleUrl, }}  />
        <Image style={styles.storyCircle} source={{ uri: storyCircleUrl, }}  />
        <Image style={styles.storyCircle} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}  />
        
        <Image style={styles.storyCircle} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}  />
        <Image style={styles.storyCircle} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}  />
        <Image style={styles.storyCircle} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}  />
        </View>
        </ScrollView>
    );
};

export default Stories;

const styles = StyleSheet.create({

    storyCircle: {
      width: 65,
      height: 65,
      borderRadius: 50,
      marginRight:4,
      
      
    },
    storyaddCircle: {
        width: 20,
        height: 20,
        borderRadius: 50,
        marginRight:4,
        position: 'absolute',
        marginTop:45,
        marginLeft:45,

        
      },
    container: {
        paddingRight: 5,
        flexDirection: "row",
        margin: 5,
        
    },
    

   
  });