import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../../assets/theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        // background: Colors.background.secondary,
    },
    logintext: {
        paddingLeft: 20,
        fontSize: Fonts.size.xLarge,
    },
    text: {
        textAlign: 'center',
        fontSize: Fonts.size.small,
        color: Colors.text.tertiary
    },
    headtext: {
        paddingLeft: 15,
        // textAlign: 'center',
        fontSize: Fonts.size.xLarge,
        color: Colors.text.tertiary
    },
    inputContainer: {
        // marginVertical: 90,
        // 
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.shadow1,
        // backgroundColor:"red",
        borderWidth: 0.5,
        borderColor: Colors.white,
        borderRadius: 10,
        padding:6
       
     },
     inputField: {
        backgroundColor: Colors.shadow1,
        // backgroundColor:"black",
        // borderRadius: 10,
        height: 40,
        padding: 0, // Remove any padding
        color: Colors.white, // Set text color (if needed)
        fontFamily: "Now-Regular-BF6542f7138c477",
        flex: 1, // Take up remaining space
        borderBottomWidth: 0,

     },
     icon: {
        // paddingLeft: 10, 
        marginRight:8
     },
})