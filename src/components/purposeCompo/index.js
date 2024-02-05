import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import Images from '../../assets/Images'

const PurposeCompo = (props) => {
    return (
        <>
        <TouchableOpacity style={styles.container}>
        <Image source={props.Image} />
    </TouchableOpacity >
       
            <Text style={styles.text} >{props.text}
            </Text>
        </>
    )
}

export default PurposeCompo

