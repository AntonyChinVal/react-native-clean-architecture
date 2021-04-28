import React from 'react';
import {
    TouchableOpacity,View, Text,
} from 'react-native';
import{FunctionComponent as FC} from 'react';
import { styles } from './style';
 
interface WButtonProps{
    title? : string  
    onPress : () =>void
    style? : any, 
}

const wButton : FC<WButtonProps> = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={props.style}> 
            <View style={[styles.button]}>
                <Text style={[styles.text]}>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

wButton.defaultProps = {
    title : ''
} 


export default wButton;