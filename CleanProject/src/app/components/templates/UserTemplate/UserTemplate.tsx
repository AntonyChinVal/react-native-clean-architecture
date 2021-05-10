import React from 'react';
import { Text, View } from 'react-native';

export interface UserTemplateProps{ 
    userName : String
}

const UserTemplate = (props  : UserTemplateProps) => {

    return (
        <View style={{flex : 1, alignItems : 'center', justifyContent : 'center'}}>
            <Text style={{marginBottom : 20,marginHorizontal : 20, fontSize : 20}}>Welcome {props.userName}  </Text>
        </View>
    )
};

UserTemplate.defaultProps = {
};


export default UserTemplate;