import React from "react";
import {View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';

const TopContent = () => {
    return(
        <View>

            <View style={styles.top_container}>
                
                <Image style={styles.storyCircle} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}  />
                    
                    <View style={styles.text_container}>
                         <Text style={styles.text_style}>Username</Text>

                            <View style={styles.dot_container}>
                                 <Text style={styles.dot_style}>...</Text>
                            </View>
                    </View>

                    <View style={styles.dot_container}>
                         <Text style={styles.text_style}>...</Text>
                    </View>
            </View>

            
        </View>
    );
};


export default TopContent; 

const styles = StyleSheet.create({

    top_container: {
        width: "100%",
        height: 50,
        
        flexDirection: 'row'
       
    },
    
    text_container: {
        width: "100%",
        marginTop: 15,
        flexDirection: 'row',
       
    },
    dot_container: {
        width: "100%",
        marginLeft: 265,
        marginBottom: 15,
       
    },
    text_style: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 13,

       
    },
    dot_style: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 17,

        
        

       
    },
    storyCircle: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight:4,
        margin:5
        
        
      },
    
    
});