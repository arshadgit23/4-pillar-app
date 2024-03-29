import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Colors, Fonts } from '../../assets/theme';
import Images from '../../assets/Images';

const slides = [
    {
        key: 'one',
        title: 'Faith',
        // text: 'Building dreams Day by Day, "/n"habit by habit ',
        text : 'Building dreams Day by Day, \nhabit by habit',

        image: Images.slides.slide1,
    },
    {
        key: 'two',
        title: 'Family',
        text: 'Other cool stuff',
        image: Images.slides.slide2,
    },
    {
        key: 'three',
        title: 'Fitness',
        text: "I'm already out of descriptions\nLorem ipsum bla bla bla",
        image: Images.slides.slide3,
    },
    {
        key: 'three',
        title: 'Education',
        text: "I'm already out of descriptions\nLorem ipsum bla bla bla",
        image: Images.slides.slide4,
    },
];
const Slider = () => {
    const [showRealApp, setShowRealApp] = useState(false);
    const _renderItem = ({ item , index}) => {
        return (
            <>
                <View style={styles.slide}>
                    <View style={{ width: 280, height: 400 }}>
                        <Image
                            source={item.image}
                            resizeMode='contain'
                            style={{ flex: 1, width: '100%', height: '100%' }} />
                    </View>
                </View>
                <View style={{}} key={index}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text numberOfLines={3} style={[styles.text, { color: Colors.text.secondary }]}>{item.text}</Text>
                </View>
            </>

        );
    };
    const _onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        setShowRealApp(true);
    };

    // if (showRealApp) {
    //     // Replace this return statement with the content of your real app
    //     return (
    //         <View>
    //             <Text>This is the real app content</Text>
    //         </View>
    //     );
    // } else {
    return <AppIntroSlider renderItem={_renderItem} data={slides} onDone={_onDone}
        dotStyle={{ backgroundColor: Colors.gray7, width: 15, height: 15, borderRadius: 15, marginTop: 35 }}
        activeDotStyle={{ backgroundColor: Colors.background.secondary, width: 15, height: 15, borderRadius: 15, marginTop: 35 }} showDoneButton={false} showNextButton={false} />;
    // }
};

const styles = StyleSheet.create({
    slide: {
        // flex: 1,
        paddingTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'transparent',
    },
    title: {
        fontSize: Fonts.size.xxxxLarge,
        color: 'white',

        textAlign: 'center',
        fontFamily:"AbrilFatface-Regular"
    },
    text: {
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
        padding: 1,
        lineHeight: 18.9,
        fontFamily:"Quicksand-Medium"
    },
});

export default Slider;
