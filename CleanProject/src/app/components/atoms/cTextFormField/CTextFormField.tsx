import React, {FunctionComponent as FC, useState, RefObject} from 'react';
import {
    TextInput, TextInputProps
} from 'react-native';
import { styles } from './style';

export interface CTextFormFieldProps extends TextInputProps {}

const CTextFormField = React.forwardRef((props  : CTextFormFieldProps, ref : any) => (
    <TextInput {...props}
    style={[styles.input,props.style]}
    ref={ref}/>
));

CTextFormField.defaultProps = {};

export default CTextFormField;