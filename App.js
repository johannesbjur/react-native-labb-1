import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, Button } from 'react-native';

export default function App() {

    let imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrmajIXJJ2vzao3-hmdqEo6diAAlmZPr1idA&usqp=CAU"
    var text = ""

  return (
    <View>
        <View style={styles.topBar}></View>
        <View style={styles.topView}>
            <Text style={styles.title}>Hello World!</Text>
            <Text style={{fontSize:25}}>First React Native App</Text>
            <Text style={{color:'#24305E'}}>This is a paragraph explaining what this app is all about. As you can see there are already many components including text, 
                images and buttons.</Text>
        </View>
        <View style={styles.middleView}>
            <Text style={styles.secondaryTitles}>What would you like to get out of this course?</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Enter text"
                onChangeText={ (value) => text = value}
                multiline
            />
        </View>
        <View style={styles.bottomView}>
            <Text style={styles.secondaryTitles}>An emoji describing how you are feeling about this course:</Text>

            <Image 
                style={styles.image}
                source={{uri: imageUrl}}
            />

            <Button
                title="Submit"
                onPress={ () => console.log(text) }
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    topBar: {
        height: 25,
        backgroundColor:'#24305E'
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    topView: {
        backgroundColor:'#A8D1E7',
        paddingTop: 10,
        paddingBottom: 30
    },
    secondaryTitles: {
        fontWeight: 'bold',
        fontSize: 20
    },
    middleView: {
        paddingTop: 50
    },
    bottomView: {
        paddingTop: 100
    },
    image: {
        height: 100,
        width: 100,
    },
    textInput: {
        backgroundColor: '#F2F2F2'
    }

});
