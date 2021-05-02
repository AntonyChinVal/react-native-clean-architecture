import React from 'react';
import { Text, View } from 'react-native';
import { CButton } from '../../atoms';

export interface SuccessTemplateProps{ 
    onBack : () =>void
    userName : string
}

const SueccessTemplate = (props  : SuccessTemplateProps) => {

    return (
        <View style={{flex : 1, alignItems : 'center', justifyContent : 'center'}}>
            <Text style={{marginBottom : 20,marginHorizontal : 20, fontSize : 20}}>Welcome { `${props.userName}` }  </Text>
            <CButton onPress={()=>{
                props.onBack()
            }}>Regresar</CButton>
        </View>
    )
};

SueccessTemplate.defaultProps = {
};


export default SueccessTemplate;