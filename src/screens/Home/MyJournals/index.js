
import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Images from '../../../assets/Images';
import { Colors, Fonts } from '../../../assets/theme';
import Header from '../../../components/header';
import { Avatar, TextInput } from 'react-native-paper';
import Inputs from '../../../components/TextInput';
import Button from '../../../components/Button';
import LinearGradient from "react-native-linear-gradient"
const MyJournals = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={Images.backgroundImages.BackgroundImage}
                resizeMode="cover"
                style={{ flex: 1, backgroundColor: Colors.green }}>
                <KeyboardAwareScrollView
                    keyboardShouldPersistTaps="handled"
                    enableOnAndroid={true}
                    enableAutomaticScroll={true}
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.container}>
                        <Header header
                            back={"Back"}
                            backgroundColor={Colors.shadow1}
                            onPress1={() => props.navigation.replace('MyDrawer', { screen: 'MyTabs' })}
                            onPress2={() => props.navigation.navigate('SignUpScreen')}
                            color={Colors.emailcolor}
                        />
                        <View style={{ marginTop: 25 }} />
                        <Text style={styles.headtext}>Journal</Text>
                        {/* <View style={{ paddingHorizontal: 15, marginTop: 10, flex: 1 }} >
                            <TouchableOpacity onPress={() => { props.navigation.navigate('How_It_Works') }} style={styles.box}>
                                <Text numberOfLines={1} style={styles.text}>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                    sed diam nonumy eirmod tempor invidunt ut...</Text>
                                <Text style={[styles.text, { paddingTop: 10, color: Colors.text.secondary, fontSize: Fonts.size.xxSmall }]}>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                    sed diam nonumy eirmod tempor invidunt ut...</Text>
                            </TouchableOpacity>
                            <View style={styles.textView}>
                                <Text style={{ color: Colors.shadow1 }}>08/30/1967</Text>
                                <Text style={{ color: Colors.shadow1 }}>06:30 PM</Text>
                            </View>
                            <View style={{ marginVertical: 10, marginTop: 25 }}>
                                <Button button1 btn1 onPress={() => props.navigation.navigate('WriteGratitude')} title={'Write Journal'}
                                    borderRadius={10}
                                />
                            </View>
                        </View> */}

<TouchableOpacity style={{backgroundColor:"rgba(67, 59, 115, 255)", width:"90%", alignSelf:"center", borderWidth:1, borderColor:"#fff", borderRadius:6, padding:16, marginTop:24}}>
    <Text style={{fontFamily:"Now-Regular-BF6542f7138c477", color:"#fff", lineHeight:22}}> 
        <Text style={{fontSize:17, fontWeight:"800"}}>Lorem ipsum dolor sit amet Lorem ip...</Text>
        <Text>Lorem ipsum dolor sit amet, consetetur sadipscing</Text>
        <Text>elitr, sed diam nonumy eirmod tempor invidunt ut...</Text>
    </Text>
</TouchableOpacity>


<View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginHorizontal:16, marginTop:20}}>
    <Text style={{fontFamily:"Now-Regular-BF6542f7138c477", fontSize:12}}>08/30/1967</Text>
    <Text style={{fontFamily:"Now-Regular-BF6542f7138c477", fontSize:12}}>06:30 PM</Text>
</View>


<TouchableOpacity >
                           <LinearGradient colors={["#BA5DFE", "#5D36FE"]}
                           start={{x: 0.2, y: 0.25}} end={{x: 0.9, y: 2.0}}
                           style={{width:"90%",
                           paddingVertical:16,
                           marginVertical:20,
                           borderRadius:8,
                           alignSelf:"center"}}
                           >
                          <Text style={{textAlign:"center", color:"#FFFFFF", fontFamily:"Now-Medium-BF6542f7137648d", fontSize:18}}>Write Journal</Text>
                           </LinearGradient>
                           </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>
            </ImageBackground>
        </SafeAreaView>

    )
}




export default MyJournals
