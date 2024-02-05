import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Images from '../../../assets/Images';
import { Colors } from '../../../assets/theme';
import Header from '../../../components/header';
import { TextInput } from 'react-native-paper';
import Button from '../../../components/Button';
import styles from './styles';
import Inputs from '../../../components/TextInput';
import Popup from '../../../components/popup';
import LinearGradient from 'react-native-linear-gradient';

const WriteGratitude = (props) => {
    const [writingJournal, setWritingJournal] = useState(false);
    const [visible, setVisible] = useState(false);
    const [show, setShow] = useState(false)

    const buttonsData = [
        { id: 1, title: 'Gratitude 2 ' },
        { id: 2, title: 'Gratitude 3 ' },
     ];
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={Images.backgroundImages.BackgroundImage}
                resizeMode="cover"
                style={{ flex: 1, backgroundColor: Colors.green }}
            >
                <KeyboardAwareScrollView
                    keyboardShouldPersistTaps="handled"
                    enableOnAndroid={true}
                    enableAutomaticScroll={true}
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}
                >
                    <View style={styles.container}>
                        {/* Your Header Component */}
                        <Header header
                            back={"Back"}
                            backgroundColor={Colors.shadow1}
                            onPress1={() => props.navigation.goBack()}
                            onPress2={() => props.navigation.navigate('SignUpScreen')}
                            color={Colors.emailcolor}
                        />
                        <View style={{ marginTop: 25 }} />
                        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                        <Text style={[styles.headtext, {}]}>Gratitude 1</Text>
<TouchableOpacity style={{marginRight:16}}>
    <Text style={{fontFamily:"Now-Regular-BF6542f7138c477", color:"#BA5DFE",fontSize:15 }}>2 remainings</Text>
</TouchableOpacity>
                        </View>


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

<View>
      {buttonsData.map((item, index) => (
        <TouchableOpacity key={item.id} onPress={() => console.log('Button ' + (index+1) + ' pressed')}
        style={{
           
    }}
        >
            <LinearGradient colors={["#BA5DFE", "#5D36FE"]}
                           start={{x: 0.2, y: 0.25}} end={{x: 0.9, y: 2.0}}
                           style={{width:"90%",
                           paddingVertical:16,
                           marginVertical:20,
                           borderRadius:8,
                           alignSelf:"center"}}
                           >
            <Text style={{textAlign:"center", fontFamily:"Now-Regular-BF6542f7138c477",fontSize:16}}>{item.title}</Text>
            </LinearGradient>
          
        </TouchableOpacity>
      ))}
    </View>

                        {/* <View style={{ paddingHorizontal: 15, marginTop: 10, flex: 1 }}>
                            <View style={{ paddingTop: 5 }} /> */}
                            {/* <Inputs
                                TextInput1
                                // backgroundColor={''}
                                borderRadius={10}
                                placeholder="Gratitude Title..."
                                // text={password}
                                // setText={setPassword}
                                secureTextEntry={true}
                                formKey="password"
                            /> */}
                            {/* <View style={{ paddingTop: 15 }} />
                            <Text style={styles.text}>Journal Description</Text>
                            <View style={{ paddingTop: 15 }} /> */}
                            {/* <View style={styles.textAreaContainer}>
                                <TextInput
                                    style={styles.textArea}
                                    underlineColorAndroid="transparent"
                                    activeUnderlineColor="transparent"
                                    underlineColor="transparent"
                                    selectionColor="#000"
                                    placeholder="Write...."
                                    placeholderTextColor={Colors.text.secondary}
                                    numberOfLines={5}
                                    multiline={true}
                                />
                            </View> */}
                        {/* </View> */}
                        {/* <View style={{ marginVertical: 10, paddingHorizontal: 15 }}>
                            <Button
                                button1
                                btn1
                                onPress={() => { setVisible(!visible) }}
                                title={'Write Journal'}
                                borderRadius={10}
                            />
                        </View> */}
                        {/* <Popup
                            icon btn1 icon1 btn2={() => setVisible(false)}
                            btntitle2="Cancel" btntitle1="Confirm"
                            headtext="Confirm"
                            text="Remember you can't uncheck this term again?"
                            isModalVisible={visible} hide={
                                () =>
                                    setShow(!show)} />
                        <Popup
                            btn1 btntitle1="Done"
                            headtext="Hurray!"
                            text="You got an 1 point today!"
                            isModalVisible={show} hide={() => {
                                setShow(false)
                                setVisible(false)
                                props.navigation.replace('MyDrawer', { screen: 'MyTabs' })
                            }}

                        /> */}
                    </View>
                </KeyboardAwareScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default WriteGratitude;
