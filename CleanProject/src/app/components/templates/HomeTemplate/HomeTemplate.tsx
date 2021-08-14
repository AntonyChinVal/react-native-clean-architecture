import React from 'react';
import { Text, View } from 'react-native';

export interface SuccessTemplateProps{ 
}

const HomeTemplate = (props  : SuccessTemplateProps) => {

    return (
        <View style={{flex : 1, alignItems : 'center', justifyContent : 'center'}}>
            <Text style={{marginBottom : 20,marginHorizontal : 20, fontSize : 20}}>Welcome Home  </Text>
        </View>
    )
};

HomeTemplate.defaultProps = {
};


export default HomeTemplate;