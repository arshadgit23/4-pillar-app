import { Text, TouchableOpacity, View, ScrollView, ImageBackground, Image,  } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Images from '../../../assets/Images'
import { Colors, Fonts } from '../../../assets/theme';
import styles from './styles'
import CheckboxCompo from '../../../components/CheboxCompo'
import Button from '../../../components/Button';
import Header from '../../../components/header';
import Radiobtns from '../../../components/Radiobtns';
import Popup from '../../../components/popup';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from "react-native-vector-icons/AntDesign"
import Modal from "react-native-modal"
import { CheckIcon, QuestionIcon } from "../../../assets/theme/svgimages";
import { useNavigation } from '@react-navigation/native';
const HomeScreen = (props) => {
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false);
    const [show, setShow] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalSec, setModalSec] = useState(false)
    const daimondImg = require("../../../assets/Images/daimond.png")

    const list = [
        {
            id: 1, text: "Faith", text2: "Pray or Meditate",
            onPress: ()=>     setModalVisible(!modalVisible)
        },
        { id: 2, text: "Faith", text2: "Read Bible", onPress:()=>        setModalVisible(!modalVisible) },
        { id: 3, text: "Family", text2: "Invest in marriage", onPress: ()=>       setModalVisible(!modalVisible) },
        { id: 4, text: "Family", text2: "Invest in family", onPress: ()=>       setModalVisible(!modalVisible) },
        { id: 5, text: "Fitness", text2: "Exercise", onPress:   ()=>     setModalVisible(!modalVisible) },
        { id: 6, text: "Fitness", text2: "Morning Nutrition", onPress: ()=>       setModalVisible(!modalVisible) },
        { id: 7, text: "Education", text2: "Learn New", onPress:()=>        setModalVisible(!modalVisible) },
        { id: 8, text: "Goals", text2: "Review & Grow", onPress:()=>        setModalVisible(!modalVisible) },
    ]

const toggleModalSec = () =>{
    setModalVisible(false);
    setModalSec(false)
    // setModalSec(!modalSec)
    // setModalVisible(false)
    console.log("ok");

}

    const [checked, setChecked] = useState(1);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground
                source={Images.backgroundImages.BackgroundImage}
                resizeMode="cover"
                style={{ flex: 1, backgroundColor: Colors.green }}>
                <Header 
                // onPress={() => navigation.navigate("MyDrawer")}
               
                // onPress={()=>   navigation.navigate("MyDrawer")  }
                    image={Images.user.userProfile}
                    imgPress={() => navigation.navigate('MyProfile')}
                />


                <ScrollView
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.container}>

                        <Text style={[styles.text, { paddingLeft: 15, color: Colors.text.quaternary }]}>
                            SUNDAY, APR 9
                        </Text>
                        <View style={{ marginTop: 5 }} />
                        <Text style={[styles.headtext,]}>FOUR PILLARS OF GROWTH</Text>

                        <View style={styles.lists}>
                            {list.map((item) => {
                                return (
                                    <>
                                        <ScrollView>
                                            <CheckboxCompo
                                                onClick={item.onPress}
                                                checked={checked === item.id}
                                                setChecked={() => setChecked(item.id)}
                                                text={item.text}
                                                text2={item.text2}
                                                itemId={item.id}
                                            />
                                        </ScrollView>



                                    </>
                                )
                            })}
                        </View>


                        <Text style={[styles.headtext,]}>BONUS POINTS</Text>



                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginRight: 12 }}>

                            <Text style={[styles.text2, { paddingHorizontal: 0 }]}>Write Gratitude & Journal {"\n"}& Get Points</Text>
                            <Image source={daimondImg} style={styles.daimondImg} />
                        </View>


                        <View style={{ marginTop: 5 }} />
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>

                            <TouchableOpacity onPress={()=> navigation.navigate("WriteGratitude")} >
                                <LinearGradient colors={["#BA5DFE", "#5D36FE"]}
                                    start={{ x: 0.2, y: 0.25 }} end={{ x: 0.9, y: 2.0 }}
                                    style={styles.linear}
                                >
                                    <Text style={{ textAlign: "center", color: "#FFFFFF", fontFamily: "Now-Medium-BF6542f7137648d", fontSize: 18 }}>Write Gratitude</Text>
                                </LinearGradient>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ backgroundColor: "#FFFFFF", paddingHorizontal: 26, paddingVertical: 16, borderRadius: 8, }}
                            onPress={()=> navigation.navigate("MyJournals")}
                            >

                                <Text style={{ textAlign: "center", color: "#5D36FE", fontFamily: "Now-Medium-BF6542f7137648d", fontSize: 18 }}>Write Journal</Text>
                            </TouchableOpacity>
                        </View>




                        <View style={{ marginTop: 5 }} />
                        <View style={styles.textView}>
                            <Text style={[styles.headtext,]}>
                                AFFIRMATIONS</Text>
                            <Text onPress={() => props.navigation.navigate('PurposeScreen')} style={[styles.seealltext,]}>
                                See All</Text>
                        </View>

                        <View style={{ marginTop: 5 }} />
                        <Text style={styles.text2}>Complete all afirmations & get{"\n"}1point</Text>
                        <View style={{ marginTop: 15 }} />
                        <View style={{}}>
                            <Radiobtns onPressbtn={() => setVisible(!visible)} btn1 borderWidth={1}
                                backgroundColor={Colors.shadow1}
                                Easy="Start your day by waking up at the same"
                                Medium="Start your day by waking up at the same" />
                        </View>
                        <View style={{ marginTop: 10 }} />


                        <View style={{ marginTop: 10 }} />
                        <View style={styles.textView}>
                            <Text style={[styles.text, { color: Colors.text.secondary, fontSize: 16 }]}>
                                Completed</Text>
                        </View>
                        <View style={{ marginTop: 10 }} />
                        <View style={{}}>
                            <Radiobtns onPressbtn={() => setVisible(!visible)}
                                btn
                                btn1 borderWidth={1}
                                backgroundColor={Colors.shadow1}
                                Easy="Start your day by waking up at the same"
                                Medium="Start your day by waking up at the same" />
                        </View>
                        <View style={{ marginTop: 10, }} >
                            <Text style={[styles.text, { fontSize: Fonts.size.large, color: Colors.text.tertiary }]}>
                                PURPOSE</Text>
                        </View>
                        <View style={styles.textView}>
                            <Text style={[styles.text,]}>
                                Daily Habits</Text>
                            <Text onPress={() => props.navigation.navigate('PurposeScreen')} style={[styles.seealltext,]}>
                                See All</Text>
                        </View>
                        <View style={{}}>
                            <Radiobtns onPressbtn={() => setVisible(!visible)} btn1 borderWidth={1}
                                backgroundColor={Colors.shadow1}
                                Easy="Start your day by waking up at the same"
                                Medium="Start your day by waking up at the same" />
                        </View>
                        <View style={{ marginTop: 10 }} />
                        <View style={styles.textView}>
                            <Text style={[styles.text,]}>
                                Affirmations</Text>
                            <Text onPress={() => props.navigation.navigate('PurposeScreen')} style={[styles.seealltext,]}>
                                See All</Text>
                        </View>
                        <View style={{}}>
                            <Radiobtns onPressbtn={() => setVisible(!visible)} btn1 borderWidth={1}
                                backgroundColor={Colors.shadow1}
                                Easy="Start your day by waking up at the same"
                                Medium="Start your day by waking up at the same" />

                        </View>
                        <View style={{ marginTop: 10 }} />
                        <View style={{ marginTop: 10 }} />
                        <View style={styles.textView}>
                            <Text style={[styles.text,
                            {}]}>
                                My Team</Text>
                            <Text style={[styles.seealltext,]}>
                                See All</Text>
                        </View>
                        <View style={{}}>
                            <Radiobtns
                                onPressbtn={() => setVisible(!visible)}
                                borderWidth={1}
                                backgroundColor={Colors.shadow1}
                                Easy="Start your day by waking up at the same"
                                Medium="Start your day by waking up at the same" />
                        </View>

                        <View style={{ marginVertical:12 }} />


<Modal 

isVisible={modalVisible}
backdropOpacity={0.5}
// animationIn={false}
coverScreen={true}
>
<View style={styles.modalContainer}>
<View style={{alignSelf:"center", marginTop:22}}>

<QuestionIcon />
</View>


<Text style={styles.modalHeading}>Confirm?</Text>

<Text style={styles.modalText}>Remember you can't uncheck this term {"\n"}again?</Text>


<View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-evenly", marginTop:16}}>
<TouchableOpacity onPress={()=> setModalSec(!modalSec)}>
<LinearGradient colors={["#BA5DFE", "#5D36FE"]}
start={{x: 0.2, y: 0.25}} end={{x: 0.9, y: 2.0}}
style={styles.modalLinear}
>
<Text style={{textAlign:"center", color:"#FFFFFF", fontFamily:"Now-Medium-BF6542f7137648d", fontSize:18}}>Confirm</Text>
</LinearGradient>
</TouchableOpacity>


<TouchableOpacity 
style={styles.modalCloseBtn}
onPress={()=>setModalVisible(!modalVisible)}>
<Text>close</Text>
</TouchableOpacity>


</View>



{modalSec && <Text>lpopopppppppp</Text>}
</View>

</Modal>




<Modal 

isVisible={modalSec}
backdropOpacity={0.5}
// animationIn={false}
coverScreen={true}
>
<View style={styles.modalContainer}>
<View style={{alignSelf:"center", marginTop:22}}>

<Image source={require("../../../assets/Images/daimond.png")}/>
</View>


<Text style={[styles.modalHeading, {marginTop:0}]}>Hurray!</Text>

<Text style={styles.modalText}>You got an 1 point today!</Text>





<TouchableOpacity 

onPress={toggleModalSec}

>
<LinearGradient colors={["#BA5DFE", "#5D36FE"]}
start={{x: 0.2, y: 0.25}} end={{x: 0.9, y: 2.0}}
style={[ {paddingVertical:14, width:"40%",    borderRadius:8, alignSelf:"center", marginTop:16}]}
>
<Text style={{textAlign:"center", color:"#FFFFFF", fontFamily:"Now-Medium-BF6542f7137648d", fontSize:18}}>Done</Text>
</LinearGradient>
</TouchableOpacity>
</View>

</Modal>

                       
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default HomeScreen

